import { createData, f, g, IData } from "../components/GraphAndTable";

export const calcSimpleIteration = (epsilon: number) => {
  const labels: number[] = [];
  const dataAPI: number[] = [];
  const rows: IData[] = [];

  let x0 = 1;
  let x1 = g(x0);
  let iter = 1;

  while (Math.abs(x1 - x0) > epsilon) {
    rows.push(createData(iter, x0, x1 - x0, f(x0)));
    dataAPI.push(x0);
    labels.push(iter);

    x0 = x1;
    x1 = g(x0);
    iter++;
  }
  return { labels, dataAPI, rows };
};
