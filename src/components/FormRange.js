import "./FormRange.css";
import { useState } from "react";
const FormRange = (props) => {
    const [year, setYear] = useState({
        startYear: '',
        endYear: '',
    });
    
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onRangeFilter(year);
  };

  const startYearHandler = (event) => {
    setYear((prevState) => {
        return { ...prevState, startYear: event.target.value }
    })
  };

  const endYearHandler = (event) => {
    setYear((prevState) => {
        return { ...prevState, endYear: event.target.value }
    })
  };

  return (
      <form onSubmit={onSubmitHandler}>
    <div className="expense-item">
        <div className="form-group col-sm-2">
          <h2>From Year</h2>
        </div>
        <div className="col-sm-3">
          <select className="form-control" onChange={startYearHandler}>
            {props.dataset.map(function (opt) {
              return <option value={opt.Year}>{opt.Year}</option>;
            })}
          </select>
        </div>
        <div className="col-sm-2">
          <h2>To</h2>
        </div>
        <div className="col-sm-3">
          <select className="form-control" onChange={endYearHandler}>
            {props.dataset.map(function (opt) {
              return <option value={opt.Year}>{opt.Year}</option>;
            })}
          </select>
        </div>
        <div className="col-sm-2">
          <button type="submit">Filter</button>
        </div>
    </div>
      </form>
  );
};

export default FormRange;
