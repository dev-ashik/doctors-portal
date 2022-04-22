import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride 
    },
    {
        name: 'Cavity Filling',
        img: cavity 
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]
const Services = () => {
    return (
        <section className='servicess-container'> 
            <div className='text-center'>
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICESS</h5>
                <h2>Servicess We Provide</h2>
            </div>
            <section className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-5'>
                    {
                        serviceData.map(service => <ServiceDetail service={service}/>)
                    }
                </div>
            </section>
        </section>
    );
};

export default Services;