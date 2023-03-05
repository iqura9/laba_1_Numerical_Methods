import {createData, f, fDerivative, g, IData} from "../components/GraphAndTable";

export const calcModifiedNewton = (epsilon: number) => {
    const labels: number[] = [];
    const dataAPI: number[] = [];
    const rows: IData[] = [];

    let x0 = 1;
    let x1 = x0 - f(x0) / fDerivative(x0);
    let iter = 1;

    while (Math.abs(x1 - x0) > epsilon) {
        rows.push(createData(iter, x0, x1 - x0, f(x0)));
        dataAPI.push(x1);
        labels.push(iter);

        x0 = x1;
        x1 = x0 - f(x0) / fDerivative(x0);
        iter++;
    }
    return {labels,dataAPI,rows}
};
