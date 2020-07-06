import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Bar } from 'react-chartjs-2';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "50%",
        marginTop: "2em",
        marginLeft: "25%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');


    const [globalData, setGlobalData] = useState([{}]);
    useEffect(() => {
        async function requestData() {
            let response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setGlobalData(Object.values(data.countryitems[0]));
        }
        requestData();
    }, [])

    let [graphData,setGraphData]=useState([0, 0, 0, 0, 0])
    const data = {
        labels: ['Total Cases', 'Recovered', 'Deaths', 'Serious', 'Active'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: graphData
            }
        ]
    };

    const handleChange = (event) => {
        setAge(event.target.value);
        let tempArray=[]
        tempArray.push(globalData[event.target.value].total_cases)
        tempArray.push(globalData[event.target.value].total_recovered)
        tempArray.push(globalData[event.target.value].total_deaths)
        tempArray.push(globalData[event.target.value].total_serious_cases)
        tempArray.push(globalData[event.target.value].total_active_cases)
        setGraphData(tempArray);
    };

    return (
        <React.Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    {globalData.map((val, index) => {
                        return (
                            <MenuItem value={index}>{val.title}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Bar
                data={data}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </React.Fragment>
    );
}
