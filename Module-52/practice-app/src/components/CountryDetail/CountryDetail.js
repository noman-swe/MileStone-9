import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const params = useParams();
    const {countryName} = params;

    const [country, setCountry] = useState();
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [countryName]);
    
    console.log(typeof(country));
    console.log(country);

        return (
        <div>
            <h3>Country <span className='text-3xl font-semibold'>{countryName}</span></h3>
        </div>
    );
};

export default CountryDetail;