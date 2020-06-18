import {lazy} from "ice";

import AsideNavLayout from "@/layouts/AsideNavLayout";
import TopNavLayout from "@/layouts/TopNavLayout";
import BlankLayout from "@/layouts/BlankLayout";
import TopAndHeaderNavLayout from "@/layouts/TopAndHeaderNavLayout";
const Home =lazy(()=>import(/* webpackChunkName: `${home}` */'@/pages/Home') )
const Test =lazy(()=>import(/* webpackChunkName: `${home}` */'@/pages/Test') )
const NotFound =lazy(()=>import(/* webpackChunkName: `${home}` */'@/pages/NotFound') )
const Forbidden =lazy(()=>import(/* webpackChunkName: `${home}` */'@/pages/Forbidden') )
const Error =lazy(()=>import(/* webpackChunkName: `${home}` */'@/pages/Error') )
const routerConfig = [
  {
    path: '/notfound',
    component: BlankLayout,
    children: [
      { component: NotFound },
    ],
  },
  {
    path: '/error',
    component: BlankLayout,
    children: [
      { component: Error },
    ],
  },
  {
    path: '/forbidden',
    component: BlankLayout,
    children: [
      { component: Forbidden },
    ],
  },
  {
    path: '/',
    component: TopAndHeaderNavLayout,
    children:[
      {
        path:'/home',
        component:Home
      },{
      path: '/test',
        component: Test
      },
      {
        path: '/*',
        redirect: '/notfound',
      }
    ]
  },


]

export default routerConfig
