import {NuxtApp, UseFetchOptions} from "nuxt/app";

export enum ResultEnum {
    SUCCESS = 200,
    TOKEN_OVERDUE = 20001, // 用户登录失败
    INTERNAL_SERVER_ERROR = 500, // 服务异常
}

interface DefaultResult<T = any> {
    code: number;
    data: T;
    msg: string;
    success: boolean;
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request);

type HttpOption<T> = UseFetchOptions<DefaultResult<T>>;

interface RequestConfig<T = any> extends HttpOption<T> {
    // 忽略拦截，不走拦截，拥有 responseData，且 code !== 0 的情况下，直接返回 responseData，
    // 但是若无 responseData， 不设置 ignoreGlobalErrorMessage 也会报错
    ignoreCatch?: boolean;

    // 忽略全局错误提示，走拦截，但是任何情况下都不会提示错误信息
    ignoreGlobalErrorMessage?: boolean;
}

const request = async <T>(
    url: UrlType,
    params: any,
    options: RequestConfig<T>
): Promise<DefaultResult<T> | T> => {
    const headers = useRequestHeaders(["cookie"]);
    const method = ((options?.method || "GET") as string).toUpperCase();
    const runtimeConfig = useRuntimeConfig();
    const nuxtApp = useNuxtApp();
    const { $message, $login } = nuxtApp;
    const { apiBaseUrl } = runtimeConfig.public;
    const baseURL = `${apiBaseUrl}/api`;

    // 处理用户信息过期
    const handlerTokenOverdue = async () => {
        const { _route } = nuxtApp;
        // await $login(_route?.fullPath);
    };

    // 处理报错异常
    const handlerError = (msg = "服务异常") => {
        if (process.server) {
            showError({ message: msg, statusCode: 500 });
        } else {
            $message.error(msg);
        }
    };

    const { data, error } = await useFetch(url, {
        baseURL,
        headers,
        credentials: "include",
        params: method === "GET" ? params : undefined,
        body: method === "POST" ? JSON.stringify(params) : undefined,
        ...options,
        onRequest({ request, options }) {
            // 设置请求报头
            options.headers = options.headers || {}
            /**如果接口需求携带token请求，则可先自行使用官方的useCookie()方法设置Cookie存储后，再使用useCookie()方法，取出token使用。如下例子：*/
            //const token = useCookie('token')
            //@ts-ignore
            //options.headers.Authorization = token.value||null
        },
        onRequestError({ request, options, error }) {
            // 处理请求错误
            console.log("服务器链接失败!")
        },
        onResponse({ request, response, options }) {
            // 处理响应数据
        },
        onResponseError({ request, response, options }) {
            // 处理响应错误
        }
    });

    const responseData = data.value as DefaultResult<T>;
    const { ignoreCatch, ignoreGlobalErrorMessage } = options; // 忽略全局

    if (error.value || !responseData) {
        if (!ignoreGlobalErrorMessage) handlerError();
        return Promise.reject(error.value || "服务响应失败，请稍后重试");
    } else {
        const { code, data: result, msg } = responseData;
        // 接口请求成功，直接返回结果
        if (code === ResultEnum.SUCCESS || !code) {
            return result;
        }
        if (!ignoreCatch) {
            // 接口请求错误，统一处理
            switch (code) {
                case ResultEnum.TOKEN_OVERDUE: // 登录信息过期，去登录
                    // 用户信息过期
                    await handlerTokenOverdue();
                    break;
                default:
                    if (!ignoreGlobalErrorMessage) handlerError(msg);
                    return Promise.reject(msg || "服务响应失败，请稍后重试");
            }
        }
    }
    return responseData;
};

// 自动导出
export const useRequest = {
    get: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
        return request<T>(url, params, { method: "get", ...option });
    },
    post: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
        return request<T>(url, params, { method: "post", ...option });
    },
    put: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
        return request<T>(url, params, { method: "put", ...option });
    },
    remove: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
        return request<T>(url, params, { method: "delete", ...option });
    },
};
