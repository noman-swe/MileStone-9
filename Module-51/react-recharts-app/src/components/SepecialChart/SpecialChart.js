import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedPhones = data.data.data;
                const phoneData = loadedPhones.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                });
                setPhones(phoneData);

            });
    }, []);

    return (

        <BarChart width={800} height={490} data={phones} >
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey='name'></XAxis>
            <YAxis dataKey=''></YAxis>
            <Tooltip></Tooltip>
        </BarChart>

    );
};

export default SpecialChart;