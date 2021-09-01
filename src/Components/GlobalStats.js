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


export default function GlobalStats() {

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://covid2019-api.herokuapp.com/v2/current')
            let api = await res.json();

            delete api.dt;
            delete api.ts;


            setGlobalData(Object.values(api.data));
            console.log(Object.values(api.data));

        }
        getData();
    }, []);


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {Object.values(globalData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper}
                                elevation={8}>

                                {/* <h2 className={classes.title}>{key} </h2> */}
                                 {/* <h2 className={classes.title}>{globalData[key]} </h2> */}

                                
                                {/* <h2 className={classes.title}>{globalData[0]}</h2> */}
                                {/* <h2 className={classes.title}>{globalData[key]}</h2> */}
                                {/* <h2 className={classes.title}>{[key].value}</h2> */}


                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
};