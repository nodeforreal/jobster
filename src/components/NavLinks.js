import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../utils/constants";
import styled from "styled-components";
import { closeNavModal } from "../features/ui/uiSlice";
import { useDispatch } from "react-redux";

const NavLinks = () => {
  const route = useLocation();
  const dispatch = useDispatch()

  return (
    <Wrapper className="nav-items">
      {navLinks.map((item) => {
        const { id, label, path, icon } = item;
        return (
          <li key={id} className="nav-item"  onClick={()=>dispatch(closeNavModal())}>
            <Link to={path} className="nav-link">
              <span
                className={`${
                  route.pathname === path ? "icon-active" : "icon-holder"
                }`}
              >
                {icon}
              </span>
              {label}
            </Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`

  .nav-item {
    padding: 0 1.5rem;
    &:hover {
      background-color: var(--primary-100);
      padding: 0 2rem;
      .icon-holder {
        color: var(--primary-700);
      }
    }

    transition: var(--transition);
  }

  .nav-link {
    padding: 0.6rem 0;
    display: flex;
    column-gap: 1rem;
    align-items: center;

    font-size: 1rem;
    text-transform: capitalize;
    color: var(--grey-600);
  }

  .icon {
    width: 1.875rem;
    height: 1.875rem;
  }

  .icon-active {
    color: var(--primary-700);
  }
`;
export default NavLinks;
