import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    root: {
        minWidth: 275,
    },
  
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    
});


const Cards = () => {

    const [totalcases, setTotalCases] = useState([]);
    const [activecases, setActiveCases] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await axios.get('https://api.quarantine.country/api/v1/summary/latest')
            console.log(res.data.data.summary.total_cases);

            setTotalCases(res.data.data.summary.total_cases);
            setActiveCases(res.data.data.summary.active_cases);
            setDeaths(res.data.data.summary.deaths);
            setRecovered(res.data.data.summary.recovered);

        }

        getData();
    });

    // .catch(err => {
    //     console.log(err)
    // })

    const classes = useStyles();
    

    return (
        <>

            <div>
                <h1>COVID TRACKER</h1>
            </div>


            <Card className={classes.root} variant="outlined">

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Total Cases
        </Typography>
                    <Typography variant="h5" component="h2">
                        {totalcases}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Active Cases
        </Typography>
                    <Typography variant="h5" component="h2">
                        {activecases}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Deaths
        </Typography>
                    <Typography variant="h5" component="h2">
                        {deaths}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom> Recovered   </Typography>

                    <Typography variant="h5" component="h2"> {recovered}     </Typography>
                </CardContent>

            </Card>

        </>
    )

};

export default Cards;



