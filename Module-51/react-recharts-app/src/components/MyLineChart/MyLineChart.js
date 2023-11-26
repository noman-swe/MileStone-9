import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Supplier A',
            price: 400,
            sales: 2400,
            amount: 2400,
        },
        {
            name: 'Supplier B',
            price: 790,
            sales: 1398,
            amount: 2210,
        },
        {
            name: 'Supplier C',
            price: 2000,
            sales: 900,
            amount: 2290,
        },
        {
            name: 'Supplier D',
            price: 780,
            sales: 1080,
            amount: 2000,
        },
        {
            name: 'Supplier E',
            price: 1890,
            sales: 1800,
            amount: 2181,
        },
        {
            name: 'Supplier F',
            price: 290,
            sales: 2100,
            amount: 2500,
        },
        {
            name: 'Supplier G',
            price: 3490,
            sales: 300,
            amount: 2100,
        },
    ];

    return (
        <LineChart width={800} height={500} data={data} className='mt-10'>
            <Line dataKey={'price'} stroke='#8884d8'></Line>
            <Line dataKey={'sales'} stroke='red'></Line>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis dataKey={'amount'}></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;