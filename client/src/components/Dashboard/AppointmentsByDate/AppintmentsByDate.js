import React from 'react';
import styles from './AppintmentsByDate.module.css';
import AppointmentShorList from '../AppointmentShorList/AppointmentShorList';

const AppintmentsByDate = ({appointments}) => {
    const {name} = appointments;
    console.log(appointments);
    return (
        <section className={styles.appointmentsTableSection}>
            <h1>appointments: {appointments.length}</h1>
            <h6 className={styles.appointments}>Appointments</h6>
            {
                appointments.length ? <AppointmentShorList appointments={appointments}/> 
                : 
                <div className='p-5'>
                    <h4 className='lead text-center'>No Appointment at this date.</h4>
                </div>
            }
            
        </section>
    );
};

export default AppintmentsByDate;