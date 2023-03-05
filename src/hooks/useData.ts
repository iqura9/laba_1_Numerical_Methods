import {IData} from "../components/GraphAndTable";
import {useEffect, useState} from "react";

function createChartData(labels:number[], dataAPI:number[]) {
    return {
        labels,
        datasets: [
            {
                data: dataAPI,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
}

const initState = createChartData([],[])
interface IInitState {
    labels: number[];
    datasets: {
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}
export const useData = (func:any, epsilon:number) => {
    const [data, setData] = useState<IInitState>(initState);
    const [rows, setRows] = useState<IData[]>([]);
    let arg1:number[] = [],arg2:number[] = [],arg3:IData[] = [];
    useEffect(() => {
        let {labels,dataAPI,rows} = func(epsilon);
        arg1 = labels;
        arg2 = dataAPI;
        arg3 = rows;
        setRows(arg3);
        setData(createChartData(arg1,arg2));
    }, [epsilon]);
    return {data,rows};
}