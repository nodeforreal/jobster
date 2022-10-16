import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SideBar = () => {

  return (
    <Wrapper>
      <div className="logo-wrapper">
        <Logo />
      </div>
      <NavLinks />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  .logo-wrapper{
    height: var(--nav-height);
    display:flex;
    align-items: center;
  }

  .logo {
    padding: 0 1.5rem;
  }

  

  @media screen and (min-width: 992px){
    display: block;
  }
`;
export default SideBar;
