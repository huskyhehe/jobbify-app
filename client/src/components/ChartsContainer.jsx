import { useState } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/styles/ContainerCharts";
import BarChartContainer from "./BarChartContainer";
import AreaChartContainer from "./AreaChartContainer";

function ChartsContainer() {
    const [barChart, setBarChart] = useState(true);
    const { monthlyApplications: data } = useAppContext();
    
    return (
        <Wrapper>
            <h4>Monthly Applications</h4>

            <button type='button' onClick={() => setBarChart(!barChart)}>
                {barChart ? 'AreaChart' : 'BarChart'}
            </button>

            {barChart ? <BarChartContainer data={data} /> : <AreaChartContainer data={data} />}
        </Wrapper>
    );
}

export default ChartsContainer;