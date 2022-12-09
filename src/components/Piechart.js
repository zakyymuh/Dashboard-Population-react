import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

const PieChart2 = (props) => {
    const color = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    var chartData = props.dataset;

    var reduced = chartData.reduce(function(filtered, option) {
           var someNewValue = { name: option.Year, value: option.Population }
           filtered.push(someNewValue);
        return filtered;
      }, []);

    var pieData = reduced;

        return (
          <PieChart width={730} height={300}>
            <Pie
              data={pieData}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={color[index % color.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        );
      }

export default PieChart2 ;
