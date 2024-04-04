import { createVNode, render } from 'vue';
import Message from './index.vue';

// 插件注册

interface MessageProps {
    tips?: string;
    type?: any;
    visible?: boolean;
    duration?: number;
}

const Ele = function (props: MessageProps) {
    if (process.client) {
        const id = 'message';
        const div = document.querySelector('#' + id);
        if (!props.visible) {
            return;
        }
        if (div) {
            document.body.removeChild(div);
            return;
        }
        const container = document.createElement('div');
        container.id = id;
        const vm = createVNode(Message, { id, ...props });
        render(vm, container);
        document.body.appendChild(container);
    }
};

export default {
    success(tips: string) {
        Ele({ type: 'success', visible: true, tips });
    },
    warning(tips: string) {
        Ele({ type: 'warning', visible: true, tips });
    },
    error(tips: string) {
        Ele({ type: 'error', visible: true, tips });
    },
    default(tips: string) {
        Ele({ type: 'default', visible: true, tips });
    }
};
