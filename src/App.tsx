import React, {useState} from "react";
import GraphAndTable from "./components/GraphAndTable";
import "./App.css";

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import {calcSimpleIteration} from "./helpers/simple_iteration_method";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const [value, setValue] = useState(1e-2);

    const handleChange = (event:any) => {
        setValue(event.target.value);
    };

    const options = [];
    for (let i = -2; i >= -10; i--) {
        const value = `1e${i}`;
        options.push(
            <option key={value} value={value}>
                {value}
            </option>
        );
    }
  return (
    <div className="app">
        <span>Виберіть значення: </span>
        <select value={value} onChange={handleChange}>
            {options}
        </select>
      <div className="app__graph">
        <GraphAndTable epsilon={value*1} func={calcSimpleIteration}/>
        <GraphAndTable epsilon={value*1} func={calcSimpleIteration}/>
        <GraphAndTable epsilon={value*1} func={calcSimpleIteration}/>
      </div>
    </div>
  );
}
export default App;
