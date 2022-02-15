import React from 'react';
import doctor from '../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img style={{transform: 'translateY(-110)'}} src={doctor} alt="" />
                    </div>
                    <div className='col-md-7 text-white my-5'>
                        <h5 className='text-uppercase' style={{color: '#1CC7C1'}}>Appointment</h5>
                        <h1 className='my-4'>Make an appointment Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime ipsam officiis, sed voluptates eveniet doloribus quia vel repellendus asperiores!</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;