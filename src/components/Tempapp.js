import React, { useEffect, useState } from 'react';
import './css/style.css';


function Tempapp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect(() => {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5dc2ae129a248fc94ddd6ab3186a4109`;
            const response = await fetch(url);
            const resjson = await response.json();
            setCity(resjson.main);
        };

        fetchApi();
    }, [search]);
    return ( <
            >
            <
            div className = "box" >
            <
            div className = "inputData" >
            <
            input type = "search"
            className = "inputField"
            onChange = {
                (event) => { setSearch(event.target.value) } }
            /> <
            /div> {
                !city ? ( <
                    p > no data found < /p>
                ) : ( < div >
                    <
                    div className = "info" >
                    <
                    h2 className = "location" >
                    <
                    i className = "fa-solid fa-street-view" > < /i>{search} <
                    /h2> <
                    h1 className = "temp" > { city.temp } <
                    /h1> <
                    h3 className = "tempmin_max" >
                    min - { city.temp_min }
                    C, max - { city.temp_max }
                    C

                    <
                    /h3> <
                    /div> <
                    div className = "wave -one" > < /div> <
                    div className = "wave -two" > < /div> <
                    div className = "wave -three" > < /div> <
                    /div>)}


                    <
                    /div> <
                    />
                );
            }
            export default Tempapp;