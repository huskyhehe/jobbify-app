import { useEffect } from "react";
import ChartsContainer from "../../components/ChartsContainer";
import StatsContainer from "../../components/StatsContainer";
import { useAppContext } from "../../context/appContext";

function Stats() {

    const { showStats, isLoading, monthlyApplications } = useAppContext();

    useEffect(() => {
        showStats();
    }, []);

    if (isLoading) {
        return <div className='loading loading-center'></div>
    };
      
    return ( 
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    );
}

export default Stats;