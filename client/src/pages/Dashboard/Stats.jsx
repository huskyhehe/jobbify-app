import { useEffect } from "react";
import StatsContainer from "../../components/StatsContainer";
import { useAppContext } from "../../context/appContext";

function Stats() {

    const { showStats, isLoading } = useAppContext();

    useEffect(() => {
        showStats();
    }, []);

    if (isLoading) {
        return <div className='loading loading-center'></div>
    };
      
    return ( 
        <>
            <StatsContainer />
        </>
    );
}

export default Stats;