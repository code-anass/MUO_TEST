import React from 'react'
// import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute, SidebarWrapper } from './SidebarStyles'
// import { data } from '../../data/NavbarData';
import './RMenu.css'

export const RMenuBar = ({ isOpen, toggle }) => {
    return (
        <div className="slicknav_menu">
        <liner
          aria-haspopup="true"
          tabIndex={0}
          className="slicknav_btn slicknav_open"
          style={{ outline: "none" }}
        >
          <span className="slicknav_menutxt" />
          <span className="slicknav_icon slicknav_no-text">
            <span className="slicknav_icon-bar" />
            <span className="slicknav_icon-bar" />
            <span className="slicknav_icon-bar" />
          </span>
        </liner>
        <ul
          className="slicknav_nav"
          aria-hidden="false"
          role="menu"
          style={{ display: "block" }}
        >
          <li>
            <a
              className="page-scrool"
              href="#header-wrap"
              role="menuitem"
              tabIndex={0}
            >
              Home
            </a>
          </li>
          <li>
            <a className="page-scrool" href="#about" role="menuitem" tabIndex={0}>
              About
            </a>
          </li>
          <li>
            <a
              className="page-scrool"
              href="#visualisation"
              role="menuitem"
              tabIndex={0}
            >
              Insights
            </a>
          </li>
          <li>
            <a className="page-scrool" href="#theme" role="menuitem" tabIndex={0}>
              Theme
            </a>
          </li>
          <li>
            <a
              className="page-scrool"
              href="/urban/muo/muo/web/site/dashboard"
              role="menuitem"
              tabIndex={0}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              className="page-scrool"
              href="/urban/muo/muo/web/interactive-map"
              role="menuitem"
              tabIndex={0}
            >
              Interactive Map
            </a>
          </li>
          <li>
            <a
              className="page-scrool"
              href="/urban/muo/muo/web/site/login"
              role="menuitem"
              tabIndex={0}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      
    )
}

export default RMenuBar