import React, { useEffect } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../features/jobs/jobsSlice";
import Paginate from "./Paginate";

const Jobs = () => {
  const dispatch = useDispatch();
  const { totalJobs, jobs, isLoading, isDeleting, status, jobType, sort, page, search } = useSelector((state) => state.jobs);
  
  useEffect(() => {
    dispatch(getJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, jobType, sort, page, search]);

  if (isLoading && !isDeleting) {
    return (
      <Wrapper>
        <h5 className="title">Loading...</h5>
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h5 className="title">No jobs to display.</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5 className="title">{`${totalJobs} jobs found.`}</h5>
      <div className="job-cards">
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </div>
      {/* paginate */}
      <div className="paginate">
        <Paginate />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 1.5rem;

  .title {
    font-weight: 550;
  }
  .job-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .paginate {
    display: flex;
    justify-content: center;
    margin: 1.5rem auto;
  }

  @media screen and (min-width: 992px) {
    .job-cards {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default Jobs;
