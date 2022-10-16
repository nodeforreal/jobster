import { useState } from "react";
import styled from "styled-components";
import { FormInput } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);
  const [values, setValues] = useState({ ...user });

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper className="dashboard-form">
      <h3 className="form-title">profile</h3>
      <div className="form-grid">
        <FormInput
          name="name"
          labelText="name"
          value={values.name}
          handleInput={handleInput}
        />
        <FormInput
          name="lastName"
          labelText="last name"
          value={values.lastName}
          handleInput={handleInput}
        />
        <FormInput
          name="email"
          labelText="email"
          value={values.email}
          handleInput={handleInput}
        />
        <FormInput
          name="location"
          labelText="location"
          value={values.location}
          handleInput={handleInput}
        />
        <div className="form-row">
          <button
            className="btn hipster-btn row-input"
            onClick={() => dispatch(updateUser(values))}
            disabled={isLoading}
          >
            {isLoading ? "saving..." : "save changes"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Profile;
