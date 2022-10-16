import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../components";
import personImg from "../assets/images/person.svg";

const Landing = () => {
  return (
    <Wrapper className="container">
      <nav>
        <Logo />
      </nav>
      <section className="hero-content">
        <div>
          <h1 className="hero-title">
            job <span>tracking</span> app
          </h1>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore
            quas reprehenderit odio! Distinctio illum amet error assumenda
            temporibus aperiam sapiente accusamus, ratione tempore aut eligendi
            veniam enim quo nisi.
          </p>
          <Link to="/register" className="btn register-btn">
            login/register
          </Link>
        </div>
        <div className="person-svg">
          <img className="img" src={personImg} alt="" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .hero-content {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }

  .hero-title {
    font-weight: 700;
    color: var(--grey-800);
    span {
      color: var(--primary-500);
    }
  }

  .hero-desc {
    color: var(--grey-500);
  }

  .register-btn {
    font-size: 1.3rem;

    text-transform: capitalize;
  }

  .person-svg {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .hero-content {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .person-svg {
      display: block;
    }
  }
`;
export default Landing;
