import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar, SideBar, NavModal } from "../../components";

const SharedLayout = () => {
  const { isNavModalOpen, isSidebarOpen } = useSelector((state) => state.ui);

  return (
    <Wrapper sideBar={isSidebarOpen}>
      <section className="side-bar">
        <SideBar />
      </section>
      {isNavModalOpen && <NavModal />}
      <section>
        <NavBar />
        <section className="dashboard">
          <Outlet />
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: var(--transition);

  .side-bar {
    display: none;
  }
  .dashboard {
    padding: 1rem 1rem;
    height: calc(100vh - var(--nav-height));
    border-left: solid 0.1rem var(--grey-100);
    border-top: solid 0.14rem var(--grey-100);
    background-color: var(--primary-50);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: auto 1fr;

    .side-bar {
      display: block;
      transition: var(--transition);
      margin-left: ${({ sideBar }) => (sideBar ? "0" : "-230px")};
    }
    .dashboard {
      padding: 2rem 3rem;
    }
  }
`;

export default SharedLayout;
