import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { Bounce } from 'react-reveal';





export const Cards = () => {

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

    return (

        <>

            <div className="main-container">
                <div className="heading-container">
                    <h1 className="heading">COVID TRACKER</h1>
                    <p className="credit">Develop by UMAIR SADIQ</p>
                </div>
            </div>


            <div className="card-container">
                <div className="card card-1">
                    <div className="card__icon"><i className="fas fa-bolt"></i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title">Total Cases</h2>
                    <p className="card__apply">
                        <Bounce top>
                            <CountUp start={0} end={totalcases} delay={3}>
                                {({ countUpRef }) => (<h1> <span ref={countUpRef} /></h1>)}
                            </CountUp>
                        </Bounce>
                    </p>
                </div>
            </div>

            <div className="card-container">
                <div className="card card-2">
                    <div className="card__icon"><i className="fas fa-bolt"></i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title">Active Cases</h2>
                    <p className="card__apply">
                        <Bounce top>
                            <CountUp start={0} end={activecases} delay={3}>
                                {({ countUpRef }) => (<h1> <span ref={countUpRef} /></h1>)}
                            </CountUp>
                        </Bounce>
                    </p>
                </div>
            </div>

            <div className="card-container">
                <div className="card card-3">
                    <div className="card__icon"><i className="fas fa-bolt"></i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title">Death</h2>
                    <p className="card__apply">
                        <Bounce top>
                            <CountUp start={0} end={deaths} delay={3}>
                                {({ countUpRef }) => (<h1> <span ref={countUpRef} /></h1>)}
                            </CountUp>
                        </Bounce>
                    </p>
                </div>
            </div>

            <div className="card-container">
                <div className="card card-4">
                    <div className="card__icon"><i className="fas fa-bolt"></i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title">recovered</h2>
                    <p className="card__apply">
                        <Bounce top>
                            <CountUp start={0} end={recovered} delay={3}>
                                {({ countUpRef }) => (<h1> <span ref={countUpRef} /></h1>)}
                            </CountUp>
                        </Bounce>
                    </p>
                </div>
            </div>

        </>
    )

};

 
export default Cards;
