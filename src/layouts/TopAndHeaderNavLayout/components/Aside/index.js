import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import FoundationSymbol from '@icedesign/foundation-symbol';
import {Nav} from '@alifd/next';

import {config} from '../../menuConfig';
import styles from "./index.module.scss"
const asideMenuConfig=config.asideMenuConfig
let tag=0;

function getDefaultOpenKeys(location = {}) {
  const {pathname} = location;
  const menus = getNavMenuItems(asideMenuConfig);

  let openKeys = [];
  if (Array.isArray(menus)) {
    asideMenuConfig.forEach((item, index) => {
      if (pathname.startsWith(item.path)) {
        openKeys = [`${index}`];
      }
    });
  }

  return openKeys;
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData,collapse) {
  tag=tag+1;
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index+tag,collapse)
    });
}



/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      return (
        <Nav.SubNav
          key={index}
          label={<span style={{color:"#fff",marginLeft:8}}>{item.name}</span>}
          icon={<FoundationSymbol type={item.icon} size="small" />}
        >
          {childrenItems}
        </Nav.SubNav>
      );
    }
    return null;
  }
  return (
    <Nav.Item key={index} icon={<FoundationSymbol type={item.icon} size="small" />}>
      <Link to={item.path?item.path:""}  style={{color:"#fff",marginLeft:8}}>
         {item.name}
      </Link>
    </Nav.Item>
  );
}

const Aside = (props) => {
  const collapse=props.collapse
  const width=props.width
  const defaultOpenKeys = getDefaultOpenKeys(props.location);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  function toggleMenu() {
    setOpenDrawer(!openDrawer);
  }

  function onMenuClick() {
    toggleMenu();
  }

  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  const {
    location: {pathname},
  } = props;

  return (
    <div >


      <Nav
        header={<div  className={styles.tagFadeIn} style={{textAlign:"center",display:collapse===false?"block":"none"}}>{config.HeaderIcon?<div><img src={config.HeaderIcon} width={50} height={50}></img><div style={{fontSize: 18,
          fontWeight: "bolder"}}>{config.HeaderTitle}</div></div>:<div ></div>}</div>}
        style={{width:width,marginTop:20}}
        triggerType="hover"
        mode="popup"
        popupAlign={'follow'}
        openKeys={openKeys}
        iconOnly={collapse?true:false}
        hasArrow={false}
        hasTooltip
        onClick={onMenuClick}
        onOpen={onOpenChange}
        type="primary"

        embeddable={true}
      >
        {getNavMenuItems(asideMenuConfig,collapse)}
      </Nav>
    </div>
  );
};

export default withRouter(Aside);
