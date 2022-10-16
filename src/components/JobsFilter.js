import React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useDispatch, useSelector } from "react-redux";
import { filterOptions } from "../utils/constants";
import { setFilterValues, clearFilter } from "../features/jobs/jobsSlice";

const JobsFilter = () => {
  const { search, status, jobType, sortBy } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    dispatch(setFilterValues({ name, value }));
  };

  return (
    <Wrapper className="dashboard-form">
      <h3 className="form-title">Search Form</h3>

      <div className="form-grid ">
        <FormInput
          name="search"
          labelText="search"
          handleInput={handleInput}
          value={search}
        />
        <FormSelect
          name="status"
          labelText="status"
          handleSelect={handleInput}
          value={status}
          options={filterOptions.status}
        />
        <FormSelect
          name="jobType"
          labelText="job type"
          handleSelect={handleInput}
          value={jobType}
          options={filterOptions.jobType}
        />
        <FormSelect
          name="sort"
          labelText="sort by"
          handleSelect={handleInput}
          value={sortBy}
          options={filterOptions.sortBy}
        />
        <button
          className="btn form-row row-input filter-clear-btn"
          onClick={() => dispatch(clearFilter())}
        >
          clear filter
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .filter-clear-btn {
    background-color: var(--red-light);
    color: var(--red-dark);
    font-size: 1rem;
    &:hover {
      background-color: var(--red-dark);
      color: var(--red-light);
    }
  }
`;
export default JobsFilter;
