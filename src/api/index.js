import axios from "axios";
import { Message } from 'element-ui';
import router from '../router';
import QS from "qs";

const isDev = process.env.NODE_ENV === 'development';

// 请求地址
const baseUrl = isDev ? '/api' : '';

const instance = axios.create({
    baseURL: baseUrl
})

instance.defaults.timeout = 6000;

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    // token过期,刷新token,保持登录状态
    // console.log(config)
    return config;
}, function (error) {
    //对请求错误做些什么
    return Promise.reject(error);
})

//添加响应拦截器
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    //响应错误
    return Promise.reject(error);
})

export default instance