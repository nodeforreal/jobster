import React from "react";
import styled from "styled-components";

const FormSelect = ({ name, value, labelText, options, handleSelect }) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <select
        className="form-input row-input"
        name={name}
        id={name}
        value={value}
        onChange={handleSelect}
      >
        {options.map((option,index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  select {
    padding: 0 0.5rem;
  }
`;

export default FormSelect;
