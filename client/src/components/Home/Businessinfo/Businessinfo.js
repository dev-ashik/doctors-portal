import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'


const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brookliyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'primary'
    }
]


const Businessinfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
                {
                    infoData.map(info => <InfoCard info={info}/>)
                }
            </div>
        </section>
    );
};

export default Businessinfo;