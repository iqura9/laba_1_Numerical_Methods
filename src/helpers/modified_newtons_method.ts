import {
  createData,
  f,
  fDerivative,
  g,
  IData,
} from "../components/GraphAndTable";

export const calcModifiedNewton = (epsilon: number) => {
  const labels: number[] = [];
  const dataAPI: number[] = [];
  const rows: IData[] = [];

  let x0 = 0;
  let x1 = x0;
  let iter = 0;

  dataAPI.push(x1);
  labels.push(iter);
  rows.push(createData(iter, x1, null, f(x1)));
  x1 = x0 - f(x0) / fDerivative(x0);
  while (Math.abs(x1 - x0) > epsilon || iter == 0) {
    iter++;
    x0 = x1;
    x1 = x0 - f(x0) / fDerivative(x0);

    rows.push(createData(iter, x1, Math.abs(x1 - x0), f(x1)));
    dataAPI.push(x1);
    labels.push(iter);
  }
  return { labels, dataAPI, rows };
};
