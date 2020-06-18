import React from "react";
import styles from "./index.module.scss"
import {config} from "@/layouts/TopAndHeaderNavLayout/menuConfig";

import {Nav} from '@alifd/next';

import FoundationSymbol from '@icedesign/foundation-symbol';

import {Link} from "ice";


const { Item, SubNav } = Nav;
export default function Header(props) {
  const collapse = props.collapse

  function renderMenu() {
    return (
      <div>
        <Nav direction="hoz" style={{height:"100%",lineHeight: '80px'}} hasArrow={false} triggerType={"hover"} embeddable={true}>
          {config.headerMenuConfig.map((item, index) => {
            if (item.children) {
              return (
                <SubNav icon={<FoundationSymbol size="small" type={item.icon}/>} label={item.name} key={index}>

                    {item.children.map((it, ind) => {
                      return <Item key={"sub" + ind} icon={<FoundationSymbol size="small" type={item.icon}/>}><Link
                        to={it.path}>{it.name}</Link></Item>
                    })}


                </SubNav>
              )
            } else {
              return <Item key={index} icon={<FoundationSymbol size="small" type={item.icon}/>}> <Link
                to={item.path}>{item.name}</Link></Item>
            }
          })}

        </Nav>
      </div>)
  }

  return (
    <div className={styles.headerContainer}>
      <div >
      <div className={styles.tagFadeIn}
           style={{textAlign: "center", display: collapse === false ? "block" : "none"}}>
        {config.HeaderIcon ?
          <div className={styles.headerTitle}><img src={config.HeaderIcon} width={50} height={50}></img>
            <div style={{
              fontSize: 18,
              fontWeight: "bolder", marginLeft: 10
            }}>{config.HeaderTitle}</div>
          </div> : <div></div>}

      </div>
      </div>
      {renderMenu()}
    </div>
  )
}
