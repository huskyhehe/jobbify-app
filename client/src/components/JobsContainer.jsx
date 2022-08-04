import { useEffect } from "react";
import Job from "./Job";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/styles/JobsContainer";


function JobsContainer() {
    const { getJobs, jobs, isLoading, totalJobs } = useAppContext();

    useEffect(() => {
        getJobs()
      }, []);

    if (isLoading) {
        return <div className='loading loading-center'></div>
    };

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        );
    };

    return ( 
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {jobs.map((job) => {
                return <Job key={job._id} attributes={{...job}} />
                })}
            </div>
        </Wrapper>
    );
}

export default JobsContainer;