import React, { FC, memo } from "react";
import { Line } from "react-chartjs-2";
import {BasicTable} from "./BasicTable";
import {useData} from "../hooks/useData";


export interface IData {
  iter: number;
  xk: number;
  xk2: number;
  fx: number;
}
export const createData = (iter: number, xk: number, xk2: number, fx: number): IData => ({
  iter,
  xk,
  xk2,
  fx,
});
export const g = (x: number): number => x - f(x) / (2 * Math.sin(x - 4) + 5);
export const f = (x: number): number => 2 * Math.sin(x - 4) + x ** 2 + 5 * x - 3;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Метод простої ітерації",
      color: "white",
    },
  },
  scales: {
    y: {
      ticks: { color: "white", beginAtZero: true },
    },
    x: {
      ticks: { color: "white", beginAtZero: true },
    },
  },
};

interface IGraphAndTable {
  epsilon: number,
  func: any,
}

const GraphAndTable: FC<IGraphAndTable> = memo(({ epsilon,func }) => {
  const {data,rows} = useData(func, epsilon);
  return (<>
        <Line options={options} data={data} />
        <BasicTable data={rows}/>
  </>);
});

export default GraphAndTable;
