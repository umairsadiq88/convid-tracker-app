import React from "react"
import { Grid, Typography, Card, CardContent } from "@material-ui/core"
import CountUp from "react-countup"

const Cards = () => {
    return (


        <div>
            <h1>card</h1>
            <Grid container spacing={3}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>
                            Total Cases
                        </Typography>
                        <Typography color="textSecondary" variant="h4" gutterBottom>
                            <CountUp start={0} end={600000} duration={2.5} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>
                            Total Deaths
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>
                            Total Infected
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>
                            Current Infected
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>
                            Current Deaths
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards