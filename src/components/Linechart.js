import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

const LineChartGraph = (props) => {
    var chartData = props.dataset;

    var reduced = chartData.reduce(function(filtered, option) {
           var someNewValue = { name: option.Year, population: option.Population }
           filtered.push(someNewValue);
        return filtered;
      }, []);
    var lineData = reduced;

  return (
    <>
        <LineChart width={730} height={300} data={lineData} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <Legend />
          <Tooltip />
          <Line dataKey="population" stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
    </>
  );
};

export default LineChartGraph;
