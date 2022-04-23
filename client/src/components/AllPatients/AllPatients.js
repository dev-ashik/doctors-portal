import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])

    console.log(appointments);
    return (
        <div className='container-fluid row'>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5">
                <h5 className='text-brand mb-5'>All Patient</h5>
                {
                    appointments.length ? <AppointmentDataTable appointments={appointments}/> : <h3 className='text-center'>No Appointment here</h3>
                }
                
            </div>            
        </div>
    );
};

export default AllPatients;