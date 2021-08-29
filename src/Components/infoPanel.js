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


export default function CenteredGrid() {

const [globalData, setGlobalData] = useState({});
 
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://covid19.mathdro.id/api')
      let data = await res.json();
   
      delete data.dailySummary;
      delete data.dailyTimeSeries;
      delete data.image;
      delete data.countries;
      delete data.lastUpdate;
      delete data.countryDetail;
      delete data.source;

      delete data.confirmed.detail;
      delete data.deaths.detail;
      delete data.recovered.detail;

     console.log(data);

      setGlobalData(data);

    }
    getData();
  }, []);


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((key, ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} 
              elevation={8}>
                <h2 className={classes.title}>{key}</h2>
                
                <h3>{globalData[key].value} </h3>

                 </Paper>
            </Grid>
          )
        })}
        </Grid>
      </div>
  )
};