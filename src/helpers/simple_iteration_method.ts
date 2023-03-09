import { createData, f, g, IData } from "../components/GraphAndTable";

export const calcSimpleIteration = (epsilon: number) => {
  const labels: number[] = [];
  const dataAPI: number[] = [];
  const rows: IData[] = [];

  let x0 = 0;
  let x1 = 0;
  let iter = 0;

  dataAPI.push(x0);
  labels.push(iter);
  rows.push(createData(iter, x0, null, f(x1)));
  while (Math.abs(x1 - x0) > epsilon || iter == 0) {
    iter++;
    x0 = x1;
    x1 = g(x0);

    rows.push(createData(iter, x1, Math.abs(x1 - x0), f(x1)));
    dataAPI.push(x1);
    labels.push(iter);
  }
  return { labels, dataAPI, rows };
};
