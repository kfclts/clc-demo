import _axios from "axios"

const axios = (baseURL) => {
  //建立一個自定義的axios
  const instance = _axios.create({
    baseURL: baseURL || 'https://b30s7y1ee6.execute-api.us-east-1.amazonaws.com', //JSON-Server端口位置
    timeout: 1000,
  });

  return instance;
}

export { axios };
export default axios();