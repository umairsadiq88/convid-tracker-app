import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase',
    }
}));


export default function AllCountries() {

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://covid2019-api.herokuapp.com/v2/current')
            let data = await res.json();

            delete data.dt;
            delete data.ts;


            console.log(data.data[0]);

            setGlobalData(data.data);
            console.log(this.data.data)
        }
        getData();
    }, []);


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {Object.keys(globalData[0]).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper}
                                elevation={8}>
                                <h2 className={classes.title}>{key}</h2>


                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
};