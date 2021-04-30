import axios from "axios";
import { message } from "antd";
console.log("_BASEURL" + JSON.stringify(process.env));
//终止axios的fun
let axiosToken = null;
let baseUrl =
  process.env.REACT_APP_ENV === "production"
    ? process.env.REACT_APP_BASE_URL
    : "https://ku.qingnian8.com";

//请求超时时间
axios.defaults.timeout = 10000;
// axios拦截器
axios.interceptors.request.use(
  (config) => {
    //设置请求头
    config.headers.common = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (response) => {
    console.log(process);
    //请求完成token置空
    axiosToken = null;
    return response;
  },
  (error) => {
    //请求完成token置空
    axiosToken = null;
    //提示信息
    if (axios.isCancel(error)) alert(error.message, "center");
    else message.error("请稍后请求....");
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
  }
);
/**
 * 创建请求
 */
class HttpRequest {
  ajax(httpUrl, methods, paramsData, Datas) {
    return new Promise((resolve, reject) => {
      axios({
        url: baseUrl + httpUrl,
        method: methods,
        data: Datas ? Datas : undefined,
        params: paramsData ? paramsData : undefined,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  //终止请求
  doCancelToken(msg = "取消") {
    if (axiosToken) axiosToken(msg);
  }
}
export default new HttpRequest();
