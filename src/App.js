import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import PieChart2 from "./components/Piechart";
import LineChartGraph from "./components/Linechart";
import FormRange from "./components/FormRange";

function App() {
  const [data, setData] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [annotations, setAnnotations] = useState();
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();

        setData(actualData.data);
        setFiltered(actualData.data);
        setAnnotations(actualData.source[0].annotations);

        setError(null);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const onRangeFilterHandler = (rangeData) => {
    let result = [];
    result = data.filter(item => item.Year >= rangeData.startYear && item.Year <= rangeData.endYear );
    setFiltered(result);
  }

  if (loading == false) {
    return (
      <div className="App">
        <h1>Fetch API & Chart</h1>
        <span>{error}</span>
        <Header dataset={annotations}/>
        <FormRange dataset={data} onRangeFilter={onRangeFilterHandler}/>
        <div className="row">
          <div className="col-sm-6"><PieChart2 dataset={filtered}/></div>
          <div className="col-sm-6"><LineChartGraph dataset={filtered}/></div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading .. </h1>;
  }
}

export default App;
