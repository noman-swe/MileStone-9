import React from 'react';


const Link = (props) => {
    const {name, link} = props.route;

    return (
        <div  className='text-center'>

            <li className='mr-10 mt-5 bg-indigo-200 px-5 py-2 rounded-lg'>
                <a href={link}>{name}</a>
            </li>

            
        </div>
    );
}; 

export default Link;