import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const NavModal = () => {
  return (
    <Wrapper>
      <NavMenu />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: grid;
  place-content: center;

  @media screen and (min-width:992px){
    display: none;
  }
`;

export default NavModal;
