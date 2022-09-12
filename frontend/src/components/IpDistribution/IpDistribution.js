import React from "react";
import { Chart } from "react-google-charts";

/*export const data = [
    ["Nodes", "Hours per Day"],
    ["1", 4082],
    ["2", 64],
    ["3", 3],
    ["4", 1],
    ["5", 3],
    ["6", 3],
    ["7", 1],
];*/


const IpDistribution = (props) => {
    return (
        <Chart
            chartType="PieChart"
            data={props.data}
            options={{ is3D: true, slices: { 0: { color: '#26a69a' }, 1: { color: '#009688' }, 2: { color: '#00897b' }, 3: { color: '#00796b' }, 4: { color: '#00695c' }, 5: { color: '#004d40' } } }}
            width={"100%"}
            height={"200px"}
        />
    );
}

export default IpDistribution;