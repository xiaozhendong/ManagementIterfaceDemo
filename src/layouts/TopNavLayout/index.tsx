import * as React from 'react';
import {Layout,Menu} from 'antd';
import styles from "./index.module.scss"
import {menuiConfig} from "@/layouts/TopNavLayout/menuConfig";
import { Link } from 'ice';
  import FoundationSymbol from '@icedesign/foundation-symbol';
const {Header,Content}=Layout

const { SubMenu } = Menu;
class TopNavLayout extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(): void {

  }

  renderMenu=()=>{
    return <Menu  mode="horizontal" theme="dark">
      {menuiConfig.menuItem.map((item,index)=>{
          if(item.children){
            return (
              <SubMenu icon={<FoundationSymbol size="small" type={item.icon}/>} title={item.name} key={index}>

                <Menu.ItemGroup >
                  {item.children.map((it,ind)=>{
                    return <Menu.Item key={"sub"+ind} icon={<FoundationSymbol size="small" type={item.icon}/>}><Link to={it.path}>{it.name}</Link></Menu.Item>
                  })}
                </Menu.ItemGroup>

              </SubMenu>
            )
          }else {
            return <Menu.Item key={index} icon={<FoundationSymbol size="small" type={item.icon}/>} >  <Link to={item.path}>{item.name}</Link></Menu.Item>
          }
      })}

    </Menu>
  }
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    return (
      <Layout >
        <Header style={{padding:"0 20px"}}>
          <div className={styles.headerMenu}>

              <div style={{color:"#fff",display:"flex",
              alignItems: "center"}}>{menuiConfig.HeaderIcon?<img src={menuiConfig.HeaderIcon} width={50} height={50}></img>:""}<div className={styles.headerTitle}>{menuiConfig.HeaderTitle}</div></div>
            {this.renderMenu()}
          </div>
      </Header>
        <Content style={{backgroundColor:"#f5f5f5"}}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}




export default TopNavLayout ;
