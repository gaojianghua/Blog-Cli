const articleMenus = [
    {
        name: '全部',
        type: 0
    },
    {
        name: '前端',
        type: 1
    },
    {
        name: '后端',
        type: 2
    },
    {
        name: '运维',
        type: 3
    },
    {
        name: '生活',
        type: 4
    },
    {
        name: '娱乐',
        type: 5
    },
    {
        name: '其他',
        type: 6
    }
];

const gameMenus = [
    {
        name: '华容道',
        type: 0
    },
    {
        name: '贪吃蛇',
        type: 1
    },
    {
        name: '推箱子',
        type: 2
    },
    {
        name: '消消乐',
        type: 3
    },
    {
        name: '炸弹人',
        type: 4
    },
    {
        name: '打灰机',
        type: 5
    },
    {
        name: '格斗战',
        type: 6
    }
];

const list = [
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: ['前端', 'Vue', '监听器']
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: ['前端', 'Vue', '监听器']
    }
];

const menus = [
    {
        name: '首页',
        path: '/'
    },
    {
        name: '文章',
        path: '/article'
    },
    {
        name: '作品',
        path: '/works'
    },
    {
        name: '游戏',
        path: '/game'
    },
    {
        name: '文稿',
        path: '/draft'
    },
    {
        name: '关于',
        path: '/about'
    }
];

const backMenus = [
    {
        name: '统计数据',
        path: '/back/home',
        icon: '#internal-data'
    },
    {
        name: '文章管理',
        path: '/back/article',
        icon: '#document-folder'
    },
    {
        name: '游戏管理',
        path: '/back/game',
        icon: '#game-two'
    },
    {
        name: '文稿管理',
        path: '/back/draft',
        icon: '#inbox'
    }
];

const worksMenus = [
    {
        name: 'Three',
        type: 0
    },
    {
        name: 'Cesium',
        type: 1
    },
    {
        name: 'Charts',
        type: 2
    }
]

const defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNjZhYTIxZC0zOGRmLTQxZDUtYjY3YS05MWNmYTViOGQxNTYiLCJpZCI6MjA3MjIzLCJpYXQiOjE3MTI1NDU3ODJ9.x3KnX-97CZIytvhOgG5Ox5TopzNUb_qH4_6VSwpLUA4'

export default {
    articleMenus,
    gameMenus,
    list,
    menus,
    backMenus,
    worksMenus,
    defaultAccessToken
};
