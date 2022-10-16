import { useState,useEffect } from "react";
import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import { BarChart, LineChart } from "../../components/Charts";
import { MdPendingActions } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import { getStats } from "../../features/jobs/jobsSlice";

const Stats = () => {
  const dispatch = useDispatch()
  const {defaultStats, monthlyApplications} = useSelector((state)=>state.jobs)

  const [isBarChart, setIsBarChart] = useState(true);

  const handleChart = () => {
    setIsBarChart(!isBarChart);
  };

  useEffect(()=>{
    dispatch(getStats())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Wrapper>
      <div className="status-boxes">
        <StatusBox
          className="status-box-pending"
          count={defaultStats.pending}
          icon={<MdPendingActions className="icon" />}
          content="pending applications"
        />
        <StatusBox
          className="status-box-interview"
          count={defaultStats.interview}
          icon={<FaRegCalendarCheck className="icon" />}
          content="interview scheduled"
        />
        <StatusBox
          className="status-box-declined"
          count={defaultStats.declined}
          icon={<GoTrashcan className="icon" />}
          content="jobs declined"
        />
      </div>
      <div className="dashboard-chart">
        <h5 className="chart-title">monthly applications</h5>
        <button className="chart-handler-btn" onClick={handleChart}>
          {isBarChart ? "bar chart" : "line chart"}
        </button>
        {isBarChart ? <BarChart data={monthlyApplications}/> : <LineChart data={monthlyApplications}/>}
      </div>
    </Wrapper>
  );
};

const StatusBox = ({ count, icon, content, className }) => {
  return (
    <article className={`status-box ${className}`}>
      <div>
        <h1>{count}</h1>
        <span>{icon}</span>
      </div>
      <h5>{content}</h5>
    </article>
  );
};

const Wrapper = styled.section`
  .status-boxes {
    display: grid;
    gap: 1rem;
  }

  .status-box {
    padding: 1rem;
    border-radius: var(--borderRadius);
    border-bottom: solid 0.35rem var(--status-box-primary);

    h1 {
      color: var(--status-box-primary);
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    span {
      width: 55px;
      height: 55px;
      border-radius: var(--borderRadius);
      background-color: var(--status-box-secondary);
      display: grid;
      place-content: center;
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--status-box-primary);
    }

    h4 {
      text-transform: capitalize;
    }
  }

  .status-box-pending {
    --status-box-primary: hsl(41, 100%, 50%);
    --status-box-secondary: hsl(41, 100%, 87%);
  }

  .status-box-interview {
    --status-box-primary: var(--primary-500);
    --status-box-secondary: var(--primary-100);
  }

  .status-box-declined {
    --status-box-primary: hsl(0, 100%, 50%);
    --status-box-secondary: var(--red-light);
  }

  @media screen and (min-width: 992px) {
    .status-boxes {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .chart-title {
    text-align: center;
    text-transform: capitalize;
  }

  .chart-handler-btn {
    display: inline-block;
    margin: 0 auto 1.5rem;
    color: var(--primary-600);
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  .dashboard-chart {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }
`;

export default Stats;
