import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBusinessTime } from "react-icons/fa";
import { IoCalendarSharp, IoLocation } from "react-icons/io5";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { handleEditJob, deleteJob } from "../features/job/jobSlice";

const JobCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deletingJobId } = useSelector((state) => state.job);

  let { company, position, status, jobType, jobLocation, updatedAt, _id } =
    props;
  updatedAt = moment(updatedAt).format("MMM Do, YYYY");

  return (
    <Wrapper className="card-bg">
      <div className="head">
        <div className="name-box">
          <h4>{company[0]}</h4>
        </div>
        <div>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </div>
      <hr />
      <div className="info">
        <p>
          <span>
            <IoLocation className="icon" />
          </span>
          {jobLocation}
        </p>
        <p>
          <span>
            <IoCalendarSharp className="icon" />
          </span>
          {updatedAt}
        </p>
        <p>
          <span>
            <FaBusinessTime className="icon" />
          </span>
          {jobType}
        </p>

        <p className={`status ${status}`}>{status}</p>
      </div>
      <div className="card-btns">
        <button
          className="card-btn edit-btn"
          onClick={() => {
            dispatch(handleEditJob(props));
            navigate("/add-job");
          }}
        >
          Edit
        </button>
        <button
          className="card-btn delete-btn"
          onClick={() => dispatch(deleteJob(_id))}
        >
          {deletingJobId === _id ? "deleting..." : "delete"}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  text-transform: capitalize;
  .head {
    padding: 1rem;
    display: flex;
    column-gap: 1.5rem;
    align-items: center;

    h5 {
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
      color: var(--grey-500);
    }
  }

  .name-box {
    width: 65px;
    height: 65px;
    background-color: var(--primary-500);
    border-radius: var(--borderRadius);

    display: grid;
    place-content: center;
    h4 {
      margin: 0;
      font-weight: 550;
      color: var(--white);
    }
  }

  hr {
    border: none;
    border-top: var(--grey-200) solid 0.09375rem;
  }

  .info {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;

    gap: 1rem;
    letter-spacing: var(--letterSpacing);
    span {
      display: grid;
      place-content: center;
    }
    p {
      margin: 0;
      display: flex;
      column-gap: 1rem;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    .info {
      grid-template-columns: 1fr 1fr;
    }
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--grey-400);
  }

  .status {
    width: fit-content;
    padding: 0.2rem 0.4rem;
    font-size: 1rem;
    border-radius: var(--borderRadius);
    user-select: none;
  }

  .pending {
    color: hsl(41, 100%, 50%);
    background-color: hsl(41, 100%, 80%);
  }

  .interview {
    color: var(--primary-500);
    background-color: var(--primary-100);
  }

  .declined {
    color: hsl(0, 100%, 50%);
    background-color: var(--red-light);
  }

  .card-btns {
    padding: 0 1rem 1rem;
    display: flex;
    column-gap: 1.5rem;
  }

  .card-btn {
    padding: 0.4rem 0.5rem;
    border-radius: var(--borderRadius);
    font-size: 1rem;
  }

  .edit-btn {
    color: var(--green-dark);
    background-color: var(--green-light);
  }
  .delete-btn {
    color: var(--red-dark);
    background-color: var(--red-light);
  }
`;
export default React.memo(JobCard);
