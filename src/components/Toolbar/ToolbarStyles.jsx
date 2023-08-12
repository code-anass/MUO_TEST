// import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';
// import { SIZES } from '../../constants/theme';

// export const Top = styled.nav`
// background: ${({ theme }) => theme.bg};
// height:50px;
// width: 100%;
// /* margin-top: -80px; */
// display: flex;
// justify-content: space-between;
// align-items: center;
// font-size: ${SIZES.extraLarge}px;
// position: sticky;
// top: 0;
// z-index: 10;
// @media screen and (max-width : 968px) {
// transition: 0.8s all ease;
// }
// `;
// export const TopbarContainer = styled.div`
// display: flex;
// justify-content: flex-start;
// height: 50px;
// z-index: 1;
// width: 100%;
// padding: 0 24px;
// `;
// export const TopbarNavContainer = styled.div`
// display: flex;
// justify-content: flex-end;
// height: 50px;
// z-index: 1;
// width: 100%;
// padding: 0 34px;
// `;
// export const TopbarLogo = styled(LinkR)`
// color:  ${({ theme }) => theme.bgLighter};
// justify-self: flex-start;
// cursor: pointer;
// font-size: ${SIZES.extraLarge}px;
// display: flex;
// align-items: center;
// margin-left: 24px;
// font-weight: bold;
// text-decoration: none;
// `;
// export const TopbarLogoImg = styled.img`
// width: ${({lang})=>(lang ? '24px' :'100%')};
// height: ${({lang})=>(lang ? '24px' :'100%')};
// `;
// //common
// export const MobileIcon = styled.div`
// display: none;

// @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 20%);
//     font-size:${SIZES.extraLarge}px;
//     cursor: pointer;
// }
// `;

// export const NavMenu = styled.ul`
// color: ${({ theme }) => theme.bgLighter};
// display: flex;
// align-items: center;
// list-style: none;
// text-align: center;
// @media screen and (max-width: 768px) {
// display: none;
// }
// `;
// export const NavItem = styled.li`
//     height: 80px;
// `;

// export const NavLinks = styled(LinkS)`
// color:${({ theme }) => theme.text};
// display: flex;
// align-items: center;
// text-decoration : none;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;
// &.active{
// border-bottom : 3px solid ${({ theme }) => theme.bgLighter};
// }
// `;
// export const NavBtn = styled.nav`
// display: flex;
// align-items: center;
// @media screen and (max-width : 768px) {
// display: none;
// }
// `;

// export const NavBtnLink = styled(LinkR)`
// border-radius : 50px;
// color: ${({ theme }) => theme.primary};
// white-space: nowrap;
// padding: 12px 18px;
// font-size: ${SIZES.medium}px;
// outline: none;
// border:none;
// cursor: pointer;
// transition: all 0.2s ease-in-out ;
// text-decoration : none;
// &:hover{
//     transition: all 0.2s ease-in-out;
//     background: ${({ theme }) => theme.text};
//     color: ${({ theme }) => theme.bgLighter};
// }
// `;



import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Top = styled.nav`
/* background: ${({ theme }) => theme.fontColor ? theme.fontColor.red : theme.color.bg}; */
background: ${({ theme }) =>  theme.color.bg};
height: 4.5rem;
width: 100%;
/* margin-top: -80px; */
display: flex;
justify-content: space-between;
align-items: center;
font-size:  ${({ theme }) => theme.fontSize.medium}px;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width : 968px) {
transition: 0.8s all ease;
}
`;
export const TopbarContainer = styled.div`
display: flex;
justify-content: flex-start;
height: 50px;
z-index: 1;
width: 100%;
padding: 0 24px;
`;
export const TopbarNavContainer = styled.div`
display: flex;
justify-content: flex-end;
height: 50px;
z-index: 1;
width: 100%;
padding: 0 34px;
`;
export const TopbarLogo = styled(LinkR)`
color:  ${({ theme }) => theme.color.bgLighter};
justify-self: flex-start;
cursor: pointer;
font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;
export const TopbarLogoImg = styled.img`
width: ${({lang})=>(lang ? '24px' :'100%')};
height: ${({lang})=>(lang ? '24px' :'100%')};
`;
//common
export const MobileIcon = styled.div`
display: none;
padding-left: 15px;
padding-right: 15px;
padding-top: 10px;
padding-bottom: 5px;

border: 1.2px solid green;


@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    transform: translate(-50%, 50%);
    font-size:  ${({ theme }) => theme.fontSize.extraLarge}px;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
color: ${({ theme }) => theme.color.bgLighter};
display: flex;
align-items: center;
list-style: none;
text-align: center;
@media screen and (max-width: 768px) {
display: none;
}
`;
export const NavItem = styled.li`
    height: auto;
`;

export const NavLinks = styled(LinkS)`
color:${({ theme }) => theme.color.text};
display: flex;
align-items: center;
text-decoration : none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: ${({ theme }) => theme.fontName.Def_Font};
&.active{
border-bottom : 3px solid ${({ theme }) => theme.color.bgLighter};
}
`;
export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width : 768px) {
display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
color: ${({ theme }) => theme.color.primary};
white-space: nowrap;
padding: 12px 18px;
font-size: ${({ theme }) => theme.fontSize.medium}px;
outline: none;
// border:none;
cursor: pointer;
transition: all 0.2s ease-in-out ;
text-decoration : none;
// border-bottom : 3px solid ${({ theme }) => theme.color.text};

#nav &.focus{
    // border-bottom : 3px solid ${({ theme }) => theme.color.primary};
    }
&:active{
    border-bottom : 3px solid ${({ theme }) => theme.color.primary};

    }
&:hover{
    transition: all 0.2s ease-in-out;
    // border-bottom : 3px solid ${({ theme }) => theme.color.primary};

    // background: ${({ theme }) => theme.color.text};
    // color: ${({ theme }) => theme.color.bgLighter};
}
`;