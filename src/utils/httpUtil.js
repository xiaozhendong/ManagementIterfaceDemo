import axios from 'axios';
import {message} from 'antd';
import {logger} from 'ice';

export const fetchData = async (url, method, data) => {
  try {
    let result = await axios({url, method, data});
    return result.data;
  } catch (e) {

    logger.error(e)
    message.error("发生错误，请求失败。")
    return {
      status: "FAILED",
      message: e.toString(),
      data: {}
    }
  }
}
