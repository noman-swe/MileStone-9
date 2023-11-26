import React from 'react';

const Link = (props) => {
    const {name, link} = props.route;
    console.log(props);
    return (
        <div  className='text-center'>
            <li>
                <a href="">{name}</a>
            </li>
        </div>
    );
};

export default Link;