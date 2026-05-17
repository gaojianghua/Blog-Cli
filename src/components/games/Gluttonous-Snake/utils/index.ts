export interface ISnake {
    isStart: boolean
    isOver: boolean
    score: number
    highScore: number
    speed: number
    gridSize: number
    snake: Array<{ x: number; y: number }>
    food: { x: number; y: number }
    direction: string
    formatTime: string
    elapsedTime: number
    time: number
}

class Snake implements ISnake {
    isStart = false
    isOver = false
    score = 0
    highScore = 0
    speed = 150
    gridSize = 25
    snake: Array<{ x: number; y: number }> = []
    food = { x: 0, y: 0 }
    direction = 'right'
    nextDirection = 'right'
    formatTime = '00:00:00'
    elapsedTime = 0
    time = 0
    timer: number | null = null
    directionLock = false

    constructor() {
        this.init()
    }

    init() {
        this.isStart = false
        this.isOver = false
        this.score = 0
        this.speed = 200
        this.direction = 'right'
        this.nextDirection = 'right'
        this.directionLock = false
        this.snake = [
            { x: 5, y: 10 },
            { x: 4, y: 10 },
            { x: 3, y: 10 }
        ]
        this.generateFood()
        this.elapsedTime = 0
        this.formatTime = '00:00:00'
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }

    start() {
        this.isStart = true
        this.isOver = false
        this.startTimer()
        this.startMoving()
    }

    restart() {
        this.init()
        this.start()
    }

    end() {
        this.isStart = false
        this.isOver = false
        this.stopTimer()
        this.stopMoving()
        if (this.score > this.highScore) {
            this.highScore = this.score
        }
        this.init()
    }

    startTimer() {
        const startTime = Date.now() - this.elapsedTime
        this.time = window.setInterval(() => {
            this.elapsedTime = Date.now() - startTime
            this.formatTime = this.setFormatTime()
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.time)
    }

    setFormatTime() {
        const seconds = Math.floor(this.elapsedTime / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        return `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`
    }

    startMoving() {
        this.timer = window.setInterval(() => {
            this.move()
        }, this.speed)
    }

    stopMoving() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }

    move() {
        if (!this.isStart || this.isOver) return

        this.direction = this.nextDirection
        this.directionLock = false

        const head = { ...this.snake[0] }

        switch (this.direction) {
            case 'up':
                head.y -= 1
                break
            case 'down':
                head.y += 1
                break
            case 'left':
                head.x -= 1
                break
            case 'right':
                head.x += 1
                break
        }

        if (this.checkCollision(head)) {
            this.gameOver()
            return
        }

        this.snake.unshift(head)

        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10
            this.generateFood()
            if (this.score % 50 === 0 && this.speed > 80) {
                this.speed -= 10
                this.stopMoving()
                this.startMoving()
            }
        } else {
            this.snake.pop()
        }
    }

    checkCollision(head: { x: number; y: number }): boolean {
        if (head.x < 0 || head.x >= this.gridSize || head.y < 0 || head.y >= this.gridSize) {
            return true
        }

        for (let i = 0; i < this.snake.length; i++) {
            if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
                return true
            }
        }

        return false
    }

    generateFood() {
        let newFood: { x: number; y: number }
        do {
            newFood = {
                x: Math.floor(Math.random() * this.gridSize),
                y: Math.floor(Math.random() * this.gridSize)
            }
        } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y))
        this.food = newFood
    }

    setDirection(newDirection: string) {
        if (this.directionLock) return

        const oppositeDirections: Record<string, string> = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
        }

        if (oppositeDirections[newDirection] !== this.direction) {
            this.nextDirection = newDirection
            this.directionLock = true
        }
    }

    onKeydown(code: number) {
        if (!this.isStart) return

        const keyMap: Record<number, string> = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'left',
            68: 'right',
            87: 'up',
            83: 'down'
        }

        const direction = keyMap[code]
        if (direction) {
            this.setDirection(direction)
        }
    }

    gameOver() {
        this.isStart = false
        this.isOver = true
        this.stopTimer()
        this.stopMoving()
        if (this.score > this.highScore) {
            this.highScore = this.score
        }
        const time = setTimeout(() => {
            this.isOver = false
            clearTimeout(time)
        }, 3000)
    }

    setGridSize(size: number) {
        if (this.isStart) return
        this.gridSize = size
        this.init()
    }

    setSpeed(speed: number) {
        if (this.isStart) return
        this.speed = speed
    }
}

export default new Snake()