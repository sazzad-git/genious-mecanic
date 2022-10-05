import React from 'react';

import mecanic1 from '../../../images/mecanics/mecanic1.jpg'
import mecanic2 from '../../../images/mecanics/mecanic2.jpg'
import mecanic3 from '../../../images/mecanics/mecanic3.jpg'
import mecanic4 from '../../../images/mecanics/mecanic4.jpg'
import mecanic5 from '../../../images/mecanics/mecanic5.jpg'
import Expert from '../Expert/Expert';

const experts =[
    {
        id:1,
        img: mecanic1,
        name: 'Sakib Anderson',
        ecpertize: 'Engine Expert'
    },
    {
        id:2,
        img: mecanic2,
        name: 'Sakib Anderson',
        ecpertize: 'Engine Expert'
    },
    {
        id:3,
        img: mecanic3,
        name: 'Sakib Anderson',
        ecpertize: 'Engine Expert'
    },
    {
        id:4,
        img: mecanic4,
        name: 'Sakib Anderson',
        ecpertize: 'Engine Expert'
    },
    {
        id:5,
        img: mecanic5,
        name: 'Sakib Anderson',
        ecpertize: 'Engine Expert'
    },
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'> Our exparts</h2>
            <div className='row'>
                {
                    experts.map(expert=><Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;