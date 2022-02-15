import React from 'react';
import doctorSmall from '../../images/doctorSmall.png';
import DoctorsPost from '../DoctorsPost/DoctorsPost';

const doctorsData = [
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: doctorSmall
    },
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: doctorSmall
    },
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: doctorSmall
    }
]
const Doctors = () => {
    return (
        <section className='my-5 py-5'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h5 style={{color: '#1CC7C1'}}>Our Doctors</h5>
                </div>
                <div className='row'>
                    {
                        doctorsData.map(info => <DoctorsPost info={info}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;