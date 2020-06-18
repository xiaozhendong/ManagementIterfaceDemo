import React from 'react';
import Image from "@/pages/Forbidden/components/BasicForbidden/images";
import styles from './index.module.scss';
import {Link} from "ice";

export default function BasicForbidden() {
  return (
    <div className="basic-not-found">

        <div className={styles.exceptionContent}>
          <Image />
          <div className="prompt" style={{marginLeft:15}} >
            <h1 className={styles.myhone}>403</h1>
            <h3 className={styles.title}>
              抱歉，你无权访问该界面
            </h3>
            <p className={styles.description}>
              您缺乏相应权限，请返回<Link to={"/home"}>首页</Link>继续浏览
            </p>
          </div>
        </div>

    </div>
  );
}
