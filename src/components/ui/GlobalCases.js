import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginRight:"3em"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardsContainer: {
        marginTop: "1em",
        marginLeft:"1em"
    }
}));

export default function GlobalCases() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState({});
    useEffect(() => {
        async function requestData() {
            let response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();

            delete data.results[0].source;
            setGlobalData(data.results[0]);
        }
        requestData();
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.cardsContainer}>
                {Object.keys(globalData).map((val, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper className={classes.paper} elevation={4}>
                                <h3 style={{color:"#0B72B9"}}>{val.replace(/_/g,' ').toUpperCase()}</h3>
                                <h3>{globalData[val]}</h3>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}