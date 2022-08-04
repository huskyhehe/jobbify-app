import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import JobInfo from "./JobInfo";
import Wrapper from "../assets/styles/Job";


function Job({ attributes }) {
    const {  
        _id,
        position,
        company,
        jobLocation,
        jobType,
        createdAt,
        status} = attributes;

    let date = moment(createdAt);
    date = date.format('MMM Do, YYYY');

    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>

            <div className='content'>
                <div className='content-center'>
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className={`status ${status}`}>{status}</div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Job;
