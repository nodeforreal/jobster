import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFilterValues } from "../features/jobs/jobsSlice";

const Paginate = () => {
  const dispatch = useDispatch();
  let { numOfPages, page } = useSelector((state) => state.jobs);

  const handlePaginate = (direction) => {
    if (direction === "prev") {
      page = page - 1;
    }

    if (direction === "next") {
      page = page + 1;
    }

    if (page < 1) {
      page = numOfPages;
    }

    if (page > numOfPages) {
      page = 1;
    }

    dispatch(setFilterValues({ name: "page", value: page }));
  };

  if (numOfPages <= 1) {
    return null;
  }

  return (
    <Wrapper>
      <Button className="btn" onClick={() => handlePaginate("prev")}>
        prev
      </Button>
      {Array.from(Array(numOfPages).keys()).map((pageNum) => {
        pageNum = pageNum + 1;
        return (
          <NumButton
            key={pageNum}
            className={`btn ${page === pageNum ? "active" : ""}`}
            onClick={() =>
              dispatch(setFilterValues({ name: "page", value: pageNum }))
            }
          >
            {pageNum}
          </NumButton>
        );
      })}
      <Button className="btn" onClick={() => handlePaginate("next")}>
        next
      </Button>
    </Wrapper>
  );
};

const Button = styled.button`
  background-color: var(--primary-50);
  font-size: 1.2rem;
  color: var(--primary-400);
  &:hover {
    background-color: var(--primary-600);
    color: var(--primary-100);
  }
`;

const NumButton = styled(Button)`
  background-color: var(--primary-100);
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  .active {
    background-color: var(--primary-600);
    color: var(--primary-100);
  }
`;
export default Paginate;
