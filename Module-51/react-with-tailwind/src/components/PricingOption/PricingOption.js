import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-4 rounded-lg text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>${price}</span>
                <span className='text-xl font-bold text-gray-500'>/month</span>
            </p>

            <div>
                <h3 className='text-2xl text-left'>Benefits:</h3>
                {
                    // console.log(benefits)
                    benefits.map(benefit => <Benefit
                    // key={benifit.id}
                    benefit={benefit}
                    ></Benefit>)
                }

                <button className='bg-green-500 flex justify-center w-full mt-4 py-2 rounded-lg
                  text-white hover:text-green-700 font-bold items-center'>Buy Now <ArrowRightIcon className='w-8 h-8  ml-2 '></ArrowRightIcon></button>

                {/* <p className='flex items-center'> 
                    <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
                    Awesome features
                </p> */}
            </div>
        </div>
    );
};

export default PricingOption;