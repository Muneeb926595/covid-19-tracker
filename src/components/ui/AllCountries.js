import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginRight: "3em",
        height:"100%"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    myTableContainer: {
        marginTop: "2em",
        marginLeft: "1em",
        height:"100%"
    }
}));

export default function AllCountries() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState([{}]);
    useEffect(() => {
        async function requestData() {
            let response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setGlobalData(Object.values(data.countryitems[0]));
        }
        requestData();
    }, [])

    return (
        <div className={classes.root} style={{height:"500px"}}>

            <TableContainer component={Paper} className={classes.myTableContainer}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Country Name</TableCell>
                            <TableCell align="left">Total Cases</TableCell>
                            <TableCell align="left">Total Recovered</TableCell>
                            <TableCell align="left">Total Deaths</TableCell>
                            <TableCell align="left">New Cases Today</TableCell>
                            <TableCell align="left">New Deaths Today</TableCell>
                            <TableCell align="left">Active Cases</TableCell>
                            <TableCell align="left">Serious Cases</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {globalData.map((val, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">{index}</TableCell>
                                    <TableCell align="left">{val.title}</TableCell>
                                    <TableCell align="left">{val.total_cases}</TableCell>
                                    <TableCell align="left">{val.total_recovered}</TableCell>
                                    <TableCell align="left">{val.total_deaths}</TableCell>
                                    <TableCell align="left">{val.total_new_cases_today}</TableCell>
                                    <TableCell align="left">{val.total_new_deaths_today}</TableCell>
                                    <TableCell align="left">{val.total_active_cases}</TableCell>
                                    <TableCell align="left">{val.total_serious_cases}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}