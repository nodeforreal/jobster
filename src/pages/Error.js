import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import notFoundImage from "../assets/images/not-found.svg";
const Error = () => {
  return (
    <Wrapper className="container full-page">
      <img className="img" src={notFoundImage} alt="" />
      <div className="text-content">
        <h3>ohh! page not found.</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/" className="back-btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  place-content: center;
  img {
    max-width: 600px;
    margin: 0 auto;
  }
  .text-content {
    * {
      margin: 0;
    }
    display: grid;
    place-items: center;
    text-align: center;
    row-gap: 0.5rem;
    h3 {
      margin-top: 1rem;
    }
    p {
      color: var(--grey-400);
    }
    .back-btn {
      font-size: 1rem;
      color: var(--primary-500);
      text-transform: capitalize;
    }
  }
`;
export default Error;
