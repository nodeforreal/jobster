import { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const openLogoutButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={openLogoutButton} className="btn">
      <FaUserCircle />
      <p>{user.name}</p>
      <AiFillCaretDown />
      {isOpen && (
        <button className="logout-btn btn" onClick={() => dispatch(logout())}>
          logout
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 0.1rem 0.5rem;
  border-radius: var(--borderRadius);
  background-color: var(--primary-500);
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
  position: relative;
  color: var(--white);
  user-select: none;
  p {
    margin: 0;
    letter-spacing: var(--letterSpacing);
  }

  .logout-btn {
    padding: 0.6rem;
    background-color: var(--primary-100);
    border-radius: var(--borderRadius);
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(100% + 0.5rem);
    font-size: 1rem;
    font-weight: 550;
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default LogoutButton;
