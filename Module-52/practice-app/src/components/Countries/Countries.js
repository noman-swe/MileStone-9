import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);


    return (
        <div className=''>
            <h3 className='text-3xl text-slate-900 mb-3'>Wellcome to my world!</h3>
            <ul className='w-fit grid md:grid-cols-5'>
                {
                    countries.map(country =>
                        <li className="ml-6 bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded mb-4">
                            <Link
                                to={`/country/${country.name.common}`}
                                key={country.cca3}
                            >
                                {country.name.common}
                            </Link>
                        </li>
                    )
                }

            </ul>
        </div>
    );
};

export default Countries;