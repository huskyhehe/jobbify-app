import { useEffect } from "react";
import ChartsContainer from "../../components/ChartsContainer";
import StatsContainer from "../../components/StatsContainer";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/Loading";

function Stats() {

    const { showStats, isLoading, monthlyApplications } = useAppContext();

    useEffect(() => {
        showStats();
        // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <Loading dashboard />
    };
      
    return ( 
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    );
}

export default Stats;