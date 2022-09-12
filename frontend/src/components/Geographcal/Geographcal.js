import React from "react";
import { Chart } from "react-google-charts";


/*
function Example() {
  const [maps, setmaps] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }); */

/*
const options = {
    region: [],  // Africa
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "white",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
};*/

const Geographcal = props => {

    return (
        <Chart
            chartType="GeoChart"
            width="100%"
            height="200px"
            data={props.data}
            options={{
                region: [],
                colorAxis: { colors: ["#4db6ac", "#00897b", "#004d40"] },
                backgroundColor: "white",
                datalessRegionColor: "#f0f0f0",
                defaultColor: "#f5f5f5",
            }}
        />
    );
}

export default Geographcal;