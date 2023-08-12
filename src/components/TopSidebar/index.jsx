import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute, SidebarWrapper } from './TopSidebarStyles'
import { data } from '../../data/NavbarData';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
                {data.map((el, index) => (
                    <SidebarWrapper key={index}>
                        <SidebarMenu>
                            <SidebarLink to={el.to}>{el.text}</SidebarLink>
                        </SidebarMenu>
                    </SidebarWrapper>
                ))}
                <SideBtnWrap>
                    <SidebarRoute to='/signin '>Sign In</SidebarRoute>
                </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar