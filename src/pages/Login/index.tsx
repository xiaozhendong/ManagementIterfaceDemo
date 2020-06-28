import React from "react";
import styles from './index.module.scss';
import LoginForm from "@/pages/Login/components/LoginForm";

import BackgorundSVG from "@/components/BackgroundSVG";

class Login extends React.Component {
  // @ts-ignore
  render() {
    return (
      <div className={styles.loginFormContainer}>
        <BackgorundSVG/>
        <LoginForm/>
      </div>
    )
  }
}


export default Login
