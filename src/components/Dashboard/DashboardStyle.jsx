import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  padding-left: 1.875rem;
  background: ${({ theme }) => theme.color.insightsBg};
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  --bs-gutter-x: 1.75rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-right: -14px;
  margin-left: -14px;
  box-sizing: border-box;

  flex: 0 0 auto;
  width: 33.3333%;
  -webkit-box-flex: 0;
  max-width: 100%;
  flex-shrink: 0;
  padding-right: 14px;
  padding-left: 14px;
  margin-top: 0px;
  box-sizing: border-box;
  position: relative;
  min-height: 1px;

  flex-grow: 1;
  box-sizing: border-box;
`;

export const H1 = styled.h1`
  color: black;
  font-size: 36px;
  margin-top: 4rem;
  font-weight: 600;
  line-height: 45px;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
`;
export const HoverDiv = styled.div`
  margin-top: 0px;
  --bs-gutter-x: 1.75rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-right: -14px;
  margin-left: -14px;
  box-sizing: border-box;
  margin-bottom: 40px;
  flex: 0 0 auto;
  width: 100%;
  -webkit-box-flex: 0;
  max-width: 100%;
  flex-shrink: 0;
  padding-right: 14px;
  padding-left: 14px;
  margin-top: 0px;
  box-sizing: border-box;
  position: relative;
  min-height: 1px;

  color: rgba(0, 0, 0, 0.8);
  display: inline-block;
  cursor: pointer;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
  transition: all 2s ease;
`;

export const PointerDiv = styled.div`
  float: left;
  /* display: inline-block; */
  cursor: pointer;
  pointer-events: all;
  box-sizing: border-box;
`;


export const H2DashBoard = styled.h1`
    /* background-color: aliceblue; */
    color: #0b0b0c;
    display: flex;
    justify-content: center;
    font-size: 25px;
`
export const List = styled.div`
  display: inline-block;
  width: 20px;
  margin-left: 15px;
  margin-right: 15px;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
`;

export const Span = styled.span`
  display: inline-block;
  cursor: pointer;
  pointer-events: all;
  box-sizing: border-box;
  /* transition: all 2s ease; */
  /* transition: color 0.5s ease; */
`;



export const NavbarDropdown = styled.div`
position: relative;
max-width:200px;
margin-right: 1rem;
margin-bottom: 2rem;

border-radius: 4px;
background-color: #d4d6da;
border-color: #d4d6da;

&:hover{
  color: red;
  background-color: #d4d6da;
  border-color: #d4d6da;

}
ul{
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  list-style: none;
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
&:hover > ul{
    opacity: 1;
    top: 100%;
    visibility: visible;  
  }
 &.active:hover{
    // color:  ${({ theme }) => theme.color.navGreen};
  }
`;


export const NavbarDropdownLI = styled.li`
min-width: 200px;
padding-right: 20px; 
&:hover{
  // color:  ${({ theme }) => theme.color.navGreen};
}
`;