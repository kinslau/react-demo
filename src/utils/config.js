import axios from 'axios'

axios.interceptors.request.use(config => {

    console.log('加载中')
    return config

}, err => {
    console.log('请求失败')
    return Promise.reject(err)

    switch (err.response.status) {
        case 302:
            err.message  = 'URL错误'
            break
        default:
            break
    }
    console.log(err.message)
})




axios.interceptors.response.use(config => {
    console.log('加载完成')
    const data = config.data

    return config
}, err => {
    console.log('响应失败')

    switch (err.response.status) {

        case 400:
            err.message = '请求错误'
            break

        case 401:
            err.message = '未授权，请登录'
            break

        case 403:
            err.message = '拒绝访问'
            break

        case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break

        case 408:
            err.message = '请求超时'
            break

        case 500:
            err.message = '服务器内部错误'
            break

        case 501:
            err.message = '服务未实现'
            break

        case 502:
            err.message = '网关错误'
            break

        case 503:
            err.message = '服务不可用'
            break

        case 504:
            err.message = '网关超时'
            break

        case 505:
            err.message = 'HTTP版本不受支持'
            break

        default:
            break
    }
    console.log(err.message)
    return Promise.reject(err)
})




