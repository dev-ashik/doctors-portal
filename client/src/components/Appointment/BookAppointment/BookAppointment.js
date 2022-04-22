import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '324234ewrwr343224',
        id: 1,
        subject: 'Teeth Orthodontics',
        VisitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '324287kjhrwr343224',
        id: 2,
        subject: 'Consmetic Dentistry',
        VisitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '324287kjhrw7343224',
        id: 3,
        subject: 'Consmetic Dentistry',
        VisitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '324287kjh87yth3224',
        id: 4,
        subject: 'Cavity Protection',
        VisitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '3242f3kjh87yth3224',
        id: 5,
        subject: 'Teeth Orthodontics',
        VisitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '3242f3kjh87yth36562',
        id: 6,
        subject: 'Teeth Orthodontics',
        VisitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'  style={{color: '#1CC7C1'}}>Available Appointment on {date.toDateString()}</h2>
            <div className='d-flex justify-content-center'>
                <div className='row container p-3'>
                    {
                        bookingData.map((booking) => <BookingCard booking={booking} date={date} key={booking.id}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;