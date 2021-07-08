import React, {useState,useEffect} from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
    const {
        backgroundImage  = '',
         sidebarHeader = {
             fullName: '',
             shortName: ''
         },
          menuItems = [],
          fonts = {
              header:'',
              menu:''
          }
        } = props;

    // state
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);
    const [subMenuItemsStates, setSubmenus] = useState({});

    const submenus = {
        2:{
            isOpen : false,
            isSelected: null
        }, 
        5:{
            isOpen : false,
            isSelected: null
        }
    }
    const submenusState = {
        2:{
            isOpen: false,
            selected:null
        },
        5:{
            isOpen: false,
            selected:null
        }
    }

    // Effects ---------------------------------------------------------------
    

    // update of header State-----------------------------------------------------
    useEffect (()=>{
        isSidebarOpen ? setTimeout(setHeader(sidebarHeader.fullName),200) : setHeader(sidebarHeader.shortName);
    }, [isSidebarOpen, sidebarHeader]);

    const handleMenuItemClick = name =>{
        setSelectedMenuItem(name);
    }

    // Update of sidebar State---------------------------------------
    useEffect(()=>{
        const updateWindowWidth = () =>{
            if(window.innerWidth < 768 && isSidebarOpen) setSidebarState(false);
            else setSidebarState(true);
        }

        window.addEventListener('resize',updateWindowWidth);

        return () => window.removeEventListener('resize',updateWindowWidth);
    },[isSidebarOpen])

    //  Add index of items that contain sub menu items------------------
        // useEffect = (()=>{
        //     const  newSubmenus = {};

        //     menuItems.forEach((item,index)=>{
        //         const hasSubmenus = !!item.subMenuItems.length ;

        //         if (hasSubmenus){
        //             newSubmenus[index] = {};
        //             newSubmenus[index]['isOpen'] = false;
        //             newSubmenus[index]['selected'] = null;
        //         }
        //     })

        //     setSubmenus(newSubmenus);
        // }, [menuItems])
        // console.log(subMenusStates);


    const menuItemsJSX = menuItems.map((item,index) => {
        const isItemSelected = selected === item.name;
        
        const hasSubmenus = !!item.subMenuItems.length;

        const subMenusjsx = item.subMenuItems.map((subMenuItem,subMenuItemIndex)=>{
            return (
                    <s.SubMenuItems key={subMenuItemIndex}>{subMenuItem.name}</s.SubMenuItems>)
        })

        return (
            <s.ItemContainer key={index}>
                <s.MenuItem 
                    font={fonts.menu}
                    selected={isItemSelected}
                    onClick={()=>handleMenuItemClick(item.name)}
                    isSidebarOpen={isSidebarOpen} 
                >
                <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon}/>
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                {hasSubmenus && isSidebarOpen &&(
                     <s.DropdownIcon selected={isItemSelected}  />
                )}
                </s.MenuItem>
                
                {/* // display subitems if they exists */}
                <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>{subMenusjsx}</s.SubMenuItemContainer>
            </s.ItemContainer>
        )
    })

    console.log(`Is sidebar Open ${isSidebarOpen}`);
    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}> 
        <s.sidebarHeader font={fonts.header}>{header}</s.sidebarHeader>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        <s.TogglerContainer onClick={()=>setSidebarState(!isSidebarOpen)}>
            <s.Toggler/>
        </s.TogglerContainer>
        </s.SidebarContainer>
        )
}

export default Sidebar;