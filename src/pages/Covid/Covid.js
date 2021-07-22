import React from 'react'

import { useContext } from 'react';
import { AllContext } from "../../context";

import './Covid.css';
import Paragraph from '../../components/Paragraph/Paragraph'
import { covid } from "../../components/Paragraph/covid.json"


export default function Covid() {

    const { covidData } = useContext(AllContext);

    if (covidData.recovered) {
        return (
            <div>
                <h1>A guide to healthcare in Portugal</h1>
                <div className="healthSection">

                    <div>
                        <div className="Covid">
                            <h2>Covid Current Status in Portugal</h2>
                            <h3>
                                Recovered : {covidData.recovered.value}
                            </h3>
                            <h3>
                                Active Cases : {covidData.confirmed.value - covidData.recovered.value - covidData.deaths.value}
                            </h3>
                            <p>
                                Last Updated : {covidData.lastUpdate}
                            </p>
                        </div>
                        
                        <div className="healthSection-paragraphs">

                            <h2>Healthcare for foreigners in Portugal</h2>

                            <div>
                                {covid.map(item => <Paragraph key={item.id} {...item} />)}

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        )
    } else {
        return (
            <div className="Covid">
                Loading COVID DATA...
            </div>
        )
    }
}
