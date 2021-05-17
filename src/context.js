import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const AllContext = createContext();

export function AllProvider({ children }) {

    const [sights, setSights] = useState([]);

    const [weather, setWeather] = useState([]);

    const [covidData, setCovidData] = useState([]);



    useEffect(() => {

        //fetching Sights' data from our data.json database:
        axios.get('http://localhost:8000/sights')
            .then(res => {
                // console.log(res.data);
                setSights(res.data)
            })

        // Fetching Porto weather data:
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Porto&appid=dbea5561a8dca7af021c5b3f69494469&units=metric")
            .then(res => {
                // console.log("data : ", res.data);
                setWeather(res.data)
            })

        // Fetching Porto Covid data:
        axios.get("https://covid19.mathdro.id/api/countries/Portugal")
            .then(res => {
                console.log("data : ", res.data);
                setCovidData(res.data)
            })

    }, [])

    return (
        <AllContext.Provider value={{ sights, weather, covidData }}>
            {children}
        </AllContext.Provider>
    )
}

