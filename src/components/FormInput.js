import styled from "styled-components";

const FormInput = ({
  name,
  type,
  labelText,
  value,
  handleInput,
  placeHolder,
}) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        className="form-input row-input"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleInput}
        placeholder={placeHolder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default FormInput;
