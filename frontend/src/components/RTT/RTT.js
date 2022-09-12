import React from "react";
import { Chart } from "react-google-charts";

/*const data = [
    ["RTT ranges (seconds)", "Number of nodes"],
    ["0.0", 4094],
    ["0.5", 180],
    ["1.0", 6],
    ["2.5", 1],];*/

const RTT = props => {
    return (
        <Chart
            chartType="Bar"
            width={"90%"}
            height={"100%"}
            data={props.data}
            options={{ colors: ['#00897b'] }}
        />
    );
}

export default RTT;