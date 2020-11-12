import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ name, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={(match) => {
            let active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link className="nav-link" to={to} >{name}</Link>
                </li>
            )
        }} />
    )
}



class Menu extends Component {
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink name={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />
            })
        }
        return result
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
                <ul className="navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;