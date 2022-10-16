import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { openNavModal, sidebarToggle } from "../features/ui/uiSlice";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMenu,
} from "react-icons/ai";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.ui);
  return (
    <Wrapper>
      <button
        className="sidebar-toggle-btn"
        onClick={() => dispatch(sidebarToggle())}
      >
        {isSidebarOpen ? (
          <AiOutlineMenuFold className="icon" />
        ) : (
          <AiOutlineMenuUnfold className="icon" />
        )}
      </button>
      <button
        className="nav-menu-toggle-btn"
        onClick={() => dispatch(openNavModal())}
      >
        <AiOutlineMenu className="icon" />
      </button>
      <h3>dashboard</h3>
      <Logo className="logo" />
      <LogoutButton />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* dashboard title */
  h3 {
    margin: 0;
    display: none;
  }

  .logo {
    width: 160px;
    height: 40px;
    display: block;
  }

  @media screen and (max-width: 460px) {
    .logo {
      display: none;
    }
  }
  
  .icon {
    width: 2rem;
    height: 2rem;
    color: var(--primary-700);
  }

  .sidebar-toggle-btn {
    display: none;
  }

  .nav-menu-toggle-btn {
    display: inline-block;
  }

  @media screen and (min-width: 992px) {
    .sidebar-toggle-btn {
      display: inline-block;
    }

    .nav-menu-toggle-btn {
      display: none;
    }

    .logo {
      display: none;
    }

    /* dashboard title */
    h3 {
      display: block;
    }
  }
`;
export default NavBar;
