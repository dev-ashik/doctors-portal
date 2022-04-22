import React, { useEffect, useState } from 'react';
import AppintmentsByDate from '../AppointmentsByDate/AppintmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Appointment from '../../Appointment/Appointment/Appointment';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    useEffect(()=> {
        fetch('http://localhost:5000/addAppointmentsByDate', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify({date: selectedDate}),
        })
        .then(res=> res.json())
        .then(data=>{
            setAppointments(data)
        })
    }, [selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5 mt-3">
                    <h3 className='mb-5 fw-bold'>Appointments</h3>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5 mt-5">
                    <AppintmentsByDate appointments={appointments}/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;