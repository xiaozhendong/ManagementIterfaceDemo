import React from "react";
import styles from './index.module.scss';
import {Form, Input, Button, Checkbox} from 'antd';
import {Link} from 'ice';
import {UserOutlined, LockTwoTone} from '@ant-design/icons';
import axios from 'axios'

const layout = {

  wrapperCol: {span: 24},
};

const onFinish = async values => {

  let res = await axios.get(`/api/auth/username/${values.username}/password/${values.password}`)
  console.log(values)
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

class LoginForm extends React.Component {

  // @ts-ignore
  render() {
    return (
      <div>

        <div className={styles.loginFrom}>
          <div className={styles.antdprolayoutsuserlayoutheader}>
            <Link to="/"><img alt="logo" className={styles.antdprolayoutsuserlayoutlogo}
                              src="https://preview.pro.ant.design/static/logo.f0355d39.svg"/>
              <span className={styles.antdprolayoutsuserlayouttitle}>Ant Design</span>
            </Link>
          </div>
          <div className={styles.antdprolayoutsuserlayoutdesc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
          <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
              <Button type="primary" htmlType="submit" size="large" className={styles.loginFromButton}>
                登录
              </Button>
            </Form.Item>
          </Form>
          <div style={{textAlign: 'right'}}><Link>注册</Link><span> | </span><Link>忘记密码</Link></div>
        </div>
      </div>
    )
  }
}


export default LoginForm
