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
export const useData = (func:any, epsilon:number, w?:number) => {
    const [data, setData] = useState<IInitState>(initState);
    const [rows, setRows] = useState<IData[]>([]);

    useEffect(() => {
        let {labels,dataAPI,rows} = func(epsilon, w);
        setRows(rows);
        setData(createChartData(labels,dataAPI));
    }, [epsilon,w]);

    return {data,rows};
}