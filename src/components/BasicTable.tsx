import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {IData} from "./GraphAndTable";
import React, {FC} from "react";
import { makeStyles } from '@mui/styles';

interface IBasicTable{
    data: IData[]
}
const useStyles = makeStyles((theme) => ({
    tableContainer: {
        marginTop: 60,
        maxHeight: 600,
    },
    tableHeader: {
        "& .MuiTableCell-head": {
            backgroundColor: "#3f51b5",
            color: "#ffffff",
        },
        backgroundColor: "#3f51b5",
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5', // your desired color
        },
    },
}));

export const BasicTable:FC<IBasicTable> = ({data}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow className={classes.tableHeader}>
                        <TableCell>k</TableCell>
                        <TableCell align="center">x<sub>k</sub></TableCell>
                        <TableCell align="center">|x<sub>k</sub> - x<sub>k-1</sub>|</TableCell>
                        <TableCell align="center">f(x<sub>k</sub>)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.iter}
                            className={classes.tableRow}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.iter}
                            </TableCell>
                            <TableCell align="center">{row.xk}</TableCell>
                            <TableCell align="center">{row.xk2}</TableCell>
                            <TableCell align="center">{row.fx}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}