import React from "react";
import { Chart } from "react-google-charts";

const ClientDistribuition = props => {
    return (
        <Chart
            chartType="PieChart"
            data={props.data}
            options={{
                slices: { 0: { color: '#4db6ac' }, 1: { color: '#26a69a' }, 2: { color: '#009688' }, 3: { color: '#00897b' }, 4: { color: '#00796b' }, 5: { color: '#00695c' }, 6: { color: '#004d40' } }
            }}
            width={"100%"}
            height={"100%"}
        />
    );
}

export default ClientDistribuition; 
