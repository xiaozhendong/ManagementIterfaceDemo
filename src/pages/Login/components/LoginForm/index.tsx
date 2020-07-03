import React from "react";
import styles from './index.module.scss';
import {Button, Checkbox, Form, Input} from 'antd';
import {Link, logger, withAuth, history} from 'ice';
import {LockTwoTone, UserOutlined} from '@ant-design/icons';
import {fetchData} from '@/utils/httpUtil';
import Cookies from 'js-cookie'

const layout = {

  wrapperCol: {span: 24},
};


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    let initialValues = {}
    if (Cookies.get("remember") != undefined) {
      let remember = Cookies.get("remember")
      let UP = JSON.parse(Cookies.get("U&P"))
      console.log({
        remember,
        ...UP
      })

      initialValues = {
        remember: true,
        ...UP
      }


    }
    this.state = {
      loading: false,
      initialValues: initialValues
    }
  }

  componentDidMount() {

  }

  onFinish = async (values) => {
    this.setState({
      loading: true
    })

    let res = await fetchData('/api/auth', "post", values)

    if (res.status === "SUCCESS") {

      Cookies.set("token", res.data.token, {expires: 7})
      Cookies.set("keys", res.data.keys, {expires: 7})
      if (values.remember === true) {
        Cookies.set("remember", true)
        Cookies.set("U&P", JSON.stringify(values))
      } else {
        if (Cookies.get("remember") != undefined) {
          Cookies.remove("remember")
          Cookies.remove("U&P")
        }

      }
      const {setAuth} = this.props;
      setAuth({admin: true});
      history.push("/home")

    }
    this.setState({
      loading: false
    }, () => {
      console.log(Cookies.get("token"))
    })


  };

  onFinishFailed = (errorInfo) => {
    logger.info('Failed:', errorInfo);
  };

  // @ts-ignore
  render() {
    return (
      <div>

        <div className={styles.loginFrom}>
          <div className={styles.tagFadeIn}>
            <div className={styles.antdprolayoutsuserlayoutheader}>
              <Link to="/"><img alt="logo" className={styles.antdprolayoutsuserlayoutlogo}
                                src="https://preview.pro.ant.design/static/logo.f0355d39.svg"/>
                <span className={styles.antdprolayoutsuserlayouttitle}>Ant Design</span>
              </Link>
            </div>
            <div className={styles.antdprolayoutsuserlayoutdesc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
          </div>
          <Form
            {...layout}
            name="basic"
            initialValues={this.state.initialValues}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item

              name="username"
              rules={[{required: true, message: '请输入用户名!'}]}
            >
              <Input prefix={<UserOutlined style={{color: "rgb(24, 144, 255)"}}/>} size="large"
                     style={{width: "100%"}}/>
            </Form.Item>

            <Form.Item

              name="password"
              rules={[{required: true, message: '请输入密码!'}]}
            >
              <Input.Password size="large" style={{width: "100%"}} prefix={<LockTwoTone/>}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className={styles.loginFromButton}
                      loading={this.state.loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
          <div style={{textAlign: 'right'}}><Link to={'/register'}>注册</Link><span> | </span><Link
            to={'/forgetpassword'}>忘记密码</Link></div>
        </div>
      </div>
    )
  }
}


export default withAuth(LoginForm)
