import {} from '@ant-design/icons'
export const config={
  menuConfig:[
    {name: '首页', path: '/index', id: 'Menu_9gm9t', icon: 'home2'},
    {
      name: '分类管理',
      icon: 'cascades',
      children: [
        {
          name: '分类列表',
          icon: 'font-size',
          id: 'Menu_7s49m',
          path: 'home',
        },
        {
          name: '添加分类',
          icon: 'attachment',
          id: 'Menu_ttdk7',
          path: 'test',
        },
      ],

      id: 'Menu_m0qip',
    },

    {
      name: '文章管理',
      icon: 'copy',
      children: [
        {
          name: '文章列表',
          icon: 'ol-list',
          path: '/ArticleList',
          id: 'Menu_p834l',
        },
        {
          name: '添加文章',
          icon: 'content',
          path: '/AddArticle',
          id: 'Menu_t67hj',
        },
      ],

      id: 'Menu_m0qip',
    },

    {
      name: '用户管理',
      icon: 'yonghu',
      /*authorities: ['admin', 'user'],*/
      children: [
        {name: '用户列表', icon: 'fans', id: 'Menu_065vb', path: 'UserList', /*authorities: ['admin', 'user']*/},
        {name: '添加用户', icon: 'person', id: 'Menu_gdnrl', path: 'AddUser', /*authorities: ['admin', 'user']*/},
      ],

      id: 'Menu_m0qip',
    },

    {name: '登出', icon: 'backward', id: 'Menu_qsu8t'},
  ],
  HeaderIcon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  HeaderTitle:'测试'
};
