import request from './index';
import QS from "qs";

export const getRequest = (url, params) => {
    return request({
        method: 'get',
        url: url,
        params: params || {}
    });
}

export const postRequest = (url, params) => {
    return request({
        method: 'post',
        url: url,
        data: QS.stringify(params)
    });
}

export const postFormReq = (url, params) => {
    return request({
        method: 'post',
        url: url,
        data: params
    });
}

export const postStrReq = (url, params) => {
    return request({
        method: 'post',
        url: url,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret.slice(0, -1);
        }]
    });
}
