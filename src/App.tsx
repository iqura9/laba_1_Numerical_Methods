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
import {calcRelaxation} from "./helpers/relaxation_method";
import {calcModifiedNewton} from "./helpers/modified_newtons_method";
import {Footer} from "./components/Footer";

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
    const [value, setValue] = useState<string>('1e-5');
    const [w, setW] = useState<number>(0.23);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const handleChangeW = (event: any) => {
        setW(event.target.value);
    };


    const options = [];
    const optionsW = [];
    for (let i = -2; i >= -10; i--) {
        const value = `1e${i}`;
        
        options.push(
            <option key={value} value={value}>
                {value}
            </option>
        );
    }
    for (let i = 0; i <= 0.4; i += 0.1) {
        
        const value = Math.round(i * 100) / 100
        if(Number(value)==0.3){
            const value = 0.23;
            optionsW.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }
        optionsW.push(
            <option key={value} value={value}>
                {value}
            </option>
        );
    }

    return (<>
            <div className="app">
                <div className="app__row">
                    <span>Дослідження для <strong>2sin(x-4) + x<sup>2</sup> + 5x - 3 = 0</strong></span>
                    <div className="app__group">
                        <label htmlFor="select">Виберіть значення похибки: </label>
                        <select id="select" value={value} onChange={handleChange}>
                            {options}
                        </select>
                    </div>
                </div>

                <div className="app__graph">
                    <GraphAndTable epsilon={Number(value)} func={calcSimpleIteration} name={'Метод простої ітерації'}/>
                    <GraphAndTable epsilon={Number(value)} func={calcRelaxation} name={'Метод релаксації'} w={w}>
                        <div className="app_selectW">
                            <span>Виберіть значення W: </span>
                            <select value={w} onChange={handleChangeW}>
                                {optionsW}
                            </select>
                        </div>
                    </GraphAndTable>
                    <GraphAndTable epsilon={Number(value)} func={calcModifiedNewton}
                                   name={'Модифікований метод Ньютона'}/>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default App;
