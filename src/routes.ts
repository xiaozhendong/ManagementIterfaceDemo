import {lazy} from "ice";

import AsideNavLayout from "@/layouts/AsideNavLayout";
import TopNavLayout from "@/layouts/TopNavLayout";
import BlankLayout from "@/layouts/BlankLayout";
import TopAndHeaderNavLayout from "@/layouts/TopAndHeaderNavLayout";

const Home = lazy(() => import('@/pages/Home'))
const Test = lazy(() => import('@/pages/Test'))
const IceStoreTest = lazy(() => import('@/pages/IceStoreTest'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Forbidden = lazy(() => import('@/pages/Forbidden'))
const Error = lazy(() => import('@/pages/Error'))
const Login = lazy(() => import('@/pages/Login'))

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
      {component: Error},
    ],
  },
  {
    path: "/login",
    component: BlankLayout,
    children: [
      {component: Login}
    ]
  },
  {
    path: '/forbidden',
    component: BlankLayout,
    children: [
      {component: Forbidden},
    ],
  },
  {
    path: '/',
    component: TopAndHeaderNavLayout,
    children: [
      {
        path:'/home',
        component:Home
      },{
      path: '/test',
        component: Test
      },
      {
        path: "/IceStoreTest",
        component: IceStoreTest
      },
      {
        path: '/*',
        redirect: '/notfound',
      }
    ]
  },


]

export default routerConfig
