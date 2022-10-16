import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeNavModal } from "../features/ui/uiSlice";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { AiOutlineCloseSquare } from "react-icons/ai";
  

const NavMenu = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <button className="close-btn" onClick={()=>dispatch(closeNavModal())}>
        <AiOutlineCloseSquare className="icon icon-max-992" />
      </button>
      <div className="logo">
        <Logo />
      </div>
      <NavLinks />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background-color: var(--white);
  width: var(--fluid-width);
  min-height: 90vh;
  padding: 1.5rem;
  border-radius: var(--borderRadius);


  .close-btn {
    .icon {
      color: var(--red-dark);
    }
  }

  .logo {
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
  }

  .nav-items {
    margin-top: 2rem;
  }

  .nav-item {
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    &:hover {
      background-color: var(--primary-100);
      .icon-holder {
        color: var(--primary-700);
      }
      .nav-link{
        padding-left: 2rem;
      }
    }
  }

  .nav-link {
    padding: 0.6rem 0;
    display: flex;
    column-gap: 1rem;
    align-items: center;

    font-size: 1rem;
    text-transform: capitalize;
    color: var(--grey-600);
    transition: var(--transition);
  }

  .icon {
    width: 1.875rem;
    height: 1.875rem;
  }

  .icon-active {
    color: var(--primary-700);
  }
`;

export default NavMenu;
