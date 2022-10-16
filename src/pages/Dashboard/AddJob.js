import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  createJob,
  clearJob,
  setJobInput,
  editJob,
} from "../../features/job/jobSlice";

import { toast } from "react-toastify";
import { FormInput, FormSelect } from "../../components";
import {
  statusOptions,
  jobTypeOptions,
  toastConfig,
} from "../../utils/constants";

const AddJob = () => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job);
  const { isLoading, isEditing } = job;

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    dispatch(setJobInput({ name, value }));
  };

  const handleSubmit = () => {
    const { position, company, jobLocation } = job;
    if (!position || !company || !jobLocation) {
      toast.error("please fill the all values.", toastConfig);
      return;
    }
    if (isEditing) {
      dispatch(editJob(job));
      return;
    }
    dispatch(createJob(job));
  };

  return (
    <Wrapper className="dashboard-form">
      <h3 className="form-title">{!isEditing ? "add job" : "edit job"}</h3>
      <div className="form-grid">
        <FormInput
          name="position"
          labelText="position"
          handleInput={handleInput}
          value={job.position}
        />
        <FormInput
          name="company"
          labelText="company"
          handleInput={handleInput}
          value={job.company}
        />
        <FormInput
          name="jobLocation"
          labelText="job location"
          handleInput={handleInput}
          value={job.jobLocation}
        />

        <FormSelect
          name="status"
          labelText="status"
          options={statusOptions}
          value={job.status}
          handleSelect={handleInput}
        />
        <FormSelect
          name="jobType"
          labelText="job type"
          options={jobTypeOptions}
          value={job.jobType}
          handleSelect={handleInput}
        />

        <div className="form-btn form-row row-input">
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearJob())}
          >
            clear
          </button>
          <button
            className="btn hipster-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isEditing
              ? isLoading
                ? "update..."
                : "update"
              : isLoading
              ? "adding..."
              : "add"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-btn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default AddJob;
