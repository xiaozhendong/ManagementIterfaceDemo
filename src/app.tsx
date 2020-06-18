import { createApp } from 'ice';
import React from "react";
import MyLoading from "@/components/Loading";

const appConfig = {
  app: {
    rootId: 'ice-container',
  },
    router: {
      fallback: <MyLoading tips={"加载中。。。"}/>
    }

};

createApp(appConfig);
