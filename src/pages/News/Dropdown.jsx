import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: white;
  color: black;
  padding: 12px;
  border: none;
  cursor: pointer;
  margin-top: -10px;
  
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  background-color: #f8f9fa;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  z-index: 1;
  transition: max-height 0.3s ease-out;


  ${DropdownContainer}:hover & {
    display: block;
    max-height: 300px;

  }
`;

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: white;
  color: #343a40!important;
  border-radius: 5px;
  cursor: pointer;


 &:focus, &:hover {
    color: #1d2124!important;
    text-decoration: none;
    background-color: #f8f9fa;
  }
`;

const Dropdown = (props) => {

  const [selectedOption, setSelectedOption] = useState("2023");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    props.itemClickEvent(option);
  };


  function setMenuHeight() {
    const menu = menuRef.current;
    menu.style.maxHeight = isOpen ? `${menu.scrollHeight}px` : '0';
  }
  useEffect(setMenuHeight, [isOpen]);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)} onMouseOver={() => setIsOpen(true)} onMouseOut={() => setIsOpen(false)}>
        {selectedOption}
      </DropdownButton>
      <DropdownContent
        style={{ display: isOpen ? 'block' : 'none' }}
        ref={menuRef}
        onClick={() => setIsOpen(false)}
        onTransitionEnd={setMenuHeight}
        onMouseOver={() => setIsOpen(true)}
      >

        {props?.items?.map((item) => (

          <DropdownLink key={item} onClick={() => handleOptionClick(item)}>            {item}
          </DropdownLink>

        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
