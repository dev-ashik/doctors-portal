import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [sesectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={sesectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;