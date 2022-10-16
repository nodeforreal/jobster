import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isEmail } from "validator";
import { Logo, FormInput } from "../components";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/constants";
import { registerUser, loginUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [isMember, setIsMember] = useState(true);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSetup = (e) => {
    setIsMember(!isMember);
  };

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    
    if(!password || !email || (!isMember && !name)){
      toast.warn("please fill all fields.", toastConfig);
      return 
    }

    if (name && !isEmail(email)) {
      toast.warn("enter proper email.", toastConfig);
      return;
    }

    if (!isMember) {
      dispatch(registerUser({ name, email, password }));
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Wrapper className="container">
      <div>
        <div className="logo">
          <Logo />
        </div>
        <h3>{isMember ? "login" : "register"}</h3>

        {!isMember && (
          <FormInput
            name="name"
            labelText="name"
            type="text"
            handleInput={handleInput}
            value={values.name}
          />
        )}
        <FormInput
          name="email"
          labelText="email"
          type="email"
          handleInput={handleInput}
          value={values.email}
        />
        <FormInput
          name="password"
          labelText="password"
          type="password"
          handleInput={handleInput}
          value={values.password}
        />
        <div>
          <button
            className="btn form-btn"
            onClick={isLoading ? () => {} : onSubmit}
            disabled={isLoading}
          >
            submit
          </button>
          <button
            className="btn form-btn demo-btn"
            onClick={() =>
              dispatch(
                loginUser({ email: "testUser@test.com", password: "secret" })
              )
            }
            disabled={isLoading}
          >
            demo app
          </button>
        </div>
        <p className="instruction">
          not a member yet?{" "}
          <button onClick={handleSetup}>
            {!isMember ? "login" : "register"}
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: var(--fluid-width);
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 360px);
  gap: 24px;
  place-content: center;

  form {
    padding: 1.5rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
    border-radius: var(--borderRadius);
    border-top: 0.5rem solid var(--primary-500);
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  h3 {
    margin-top: 1rem;
    text-align: center;
  }

  .form-btn {
    margin-top: 1rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 550;
  }

  .demo-btn {
    background-color: var(--primary-200);
    color: var(--primary-500);
    &:hover {
      background-color: var(--primary-500);
      color: var(--primary-100);
    }
  }

  .instruction {
    margin: 1rem 0 0;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    button {
      font-size: 1rem;
      color: var(--primary-500);
      text-transform: capitalize;
    }
  }
`;

export default Register;
