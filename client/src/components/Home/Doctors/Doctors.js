import React, { useEffect, useState } from 'react';
import doctorSmall from '../../../images/doctorSmall.png';
import DoctorsPost from '../DoctorsPost/DoctorsPost';

const doctorsData = [
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: 'faqBannerImage.png'
    },
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: 'profile.png'
    },
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: doctorSmall
    }
]
const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section className='my-5 py-5'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h5 style={{color: '#1CC7C1'}}>Our Doctors</h5>
                </div>
                <div className='row'>
                    {
                        doctors.map(doctor => <DoctorsPost doctor={doctor}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;