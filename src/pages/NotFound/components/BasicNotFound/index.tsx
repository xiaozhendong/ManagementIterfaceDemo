import React from 'react';
import Image from "@/pages/NotFound/components/BasicNotFound/images";
import styles from './index.module.scss';
import {Link} from "ice";

export default function BasicNotFound() {
  return (
    <div className="basic-not-found">

        <div className={styles.exceptionContent}>
          <Image />
          <div className="prompt" style={{marginLeft:15}} >
            <h1 className={styles.myhone}>404</h1>
            <h3 className={styles.title}>
              抱歉，你访问的页面不存在
            </h3>
            <p className={styles.description}>
              您要找的页面没有找到，请返回<Link to={"/home"}>首页</Link>继续浏览
            </p>
          </div>
        </div>

    </div>
  );
}
