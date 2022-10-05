import React from 'react';

const Expert = ({expert}) => {
    const {name, img, ecpertize} =expert
    return (
        <div className='col-lg-4 co-sm-6 col-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{ecpertize}</h5>
        </div>
    );
};

export default Expert;