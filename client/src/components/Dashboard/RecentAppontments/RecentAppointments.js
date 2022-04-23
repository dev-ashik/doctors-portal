import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import RecentAppontmentsCard from './RecentAppontmentsCard';
import RecentAppontmentsTable from './RecentAppontmentsTable';

const cardData = [
    {
        id: 'PendingAppointments',
        name: 'Pending Appointments',
        number: 9,
    },
    {
        id: 'TodaysAppointments',
        name: "Today's Appointments",
        number: 19,
    },
    {
        id: 'TotalAppointments',
        name: 'Total Appointments',
        number: 9,
    },
    {
        id: 'TotalPatients',
        name: 'Total Patients',
        number: 78,
    },
]

const RecentAppointments = () => {
    const [recentAppointments, setRecentAppointments] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setRecentAppointments(data))
    }, [])

    return (
        <section className='container-fluid row'>
            <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 mt-3">
                    <h3 className='mb-3 fw-bold'>Dashboard</h3>
                    <RecentAppontmentsCard cardData={cardData}/>
                    {
                        recentAppointments.length ? <RecentAppontmentsTable recentAppointments={recentAppointments}/> : <h3 className='mt-5 text-center'>Recently there is no Appintment</h3>
                    }
                    
                </div>
        </section>
    );
};

export default RecentAppointments;