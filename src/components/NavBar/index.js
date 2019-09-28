import React, { Fragment, useState, useEffect } from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import "./style.less"




export default function Navbar() {
    const { SubMenu } = Menu;
    const [menuTreeNode, setMeanTreeNode] = useState()
    

    useEffect(() => {
        console.log("page")
        setMeanTreeNode(MenuConfig)
        console.log(menuTreeNode)
        
    })

    const renderMenu = (data) => {
        return (
            data.map((item) => {
                if (item.children) {
                    return (
                        <SubMenu title={item.children.title} key={item.key}>
                            renderMenu(item.children)
                       </SubMenu>
                    )
                }
                return (
                   <Menu.Item title={item.title} key={item.key}/>
                )
            })
        )
    }
    return (
        <Fragment>
            <div className="logoWrap">
                <img src="/assets/logo-ant.svg" alt="logo" />
                <h1 className="myTitle">Luis`s Project</h1>
            </div>
            <div className="menuWrap">
                <Menu theme="dark">
                    <SubMenu title="asd">
                        {/* {renderMenu(menuTreeNode)} */}
                    </SubMenu>
                </Menu>
            </div>
        </Fragment>
    )
}

