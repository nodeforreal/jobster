import React from "react";
import styled from "styled-components";
import { JobsFilter, Jobs} from "../../components";

const AllJobs = () => {
  return (
    <Wrapper className="dashboard-child">
      <JobsFilter />
      <Jobs />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default AllJobs;