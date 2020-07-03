import {createApp, IAppConfig, logger} from 'ice';
import React from "react";
import MyLoading from "@/components/Loading";
import NoAuth from "@/components/NoAuth";
import Cookies from 'js-cookie';
import jwt from "jsonwebtoken";

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    getInitialData: async () => {
      // 模拟服务端返回的数据
      // 约定权限必须返回一个 auth 对象
      // 返回的每个值对应一条权限
      //提取token做token验证，过期也不通过
      let keys = Cookies.get("keys")
      let token = Cookies.get("token")
      let isAdmin = false
      try {
        jwt.verify(token, keys)
        isAdmin = true
      } catch (e) {
        logger.error(e)
      }

      return {
        auth: {
          admin: isAdmin,
        }
      }
    },
  },
  router: {fallback: <MyLoading tips={"加载中。。。"}/>},
  auth: {
    // 可选的，设置无权限时的展示组件，默认为 null
    NoAuthFallback: <NoAuth/>,
  }


};


createApp(appConfig);
