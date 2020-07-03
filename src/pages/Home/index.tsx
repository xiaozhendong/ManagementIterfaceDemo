import React from 'react';


const Home = () => {
  console.log(12)
  return (
    <div>

    </div>
  )
};

Home.pageConfig = {
  // 可选，配置准入权限，若不配置则代表所有角色都可以访问
  auth: ['admin'],

};

export default Home;
