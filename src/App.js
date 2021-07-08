import React from 'react';
import * as s from './App.styles';

// components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';

const App = () => {
  const backgroundImage = 'images/kkh2.jpg';
  const sidebarHeader = {
    fullName:'E-Fine',
    shortName:'EF'
  };
  const menuItems = [
    {name:'Home', to: '/', icon: 'icons/home.svg', subMenuItems:[]},
    {name:'About', to: '/about', icon: 'icons/about.svg', subMenuItems:[]},
    {name:'Destinations', to: '/destinations', icon: 'icons/destinations.svg', 
      subMenuItems:[
        {name:'Canada', to:'/canada'},
        {name:'Pakistan', to:'/pakistan'},
        {name:'China', to:'/china'},
        {name:'Russia', to:'/russia'},
        {name:'Turkey', to:'/turkey'},
        {name:'Indonesia', to:'/indonesia'},
      ]},
    {name:'Blog', to: '/blog', icon: 'icons/blog.svg', subMenuItems:[]},
    {name:'Services', to: '/services', icon: 'icons/services.svg', subMenuItems:[]},
    {name:'Contacts', to: '/contacts', icon: 'icons/contacts.svg', subMenuItems:[]},
  ];

  const fonts = {
    header:'ZCOOL KuaiLe',
    menu:'Poppins'
  }

  return (
    <s.App>
    <Sidebar 
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        />
    <MainView/>
    </s.App>
  );
}

export default App;
