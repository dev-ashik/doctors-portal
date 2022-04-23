import React from 'react';
import './RecentAppointments.css';

const RecentAppointmentsCard = ({cardData}) => {
    
    return (
        <section className='row'>
            {
                cardData.map(({id, name, number}) => <div className="col-md-3">
                    <div className={`row ${id} m-3 ms-0 p-3 rounded`}>
                        <div className="col-md-3 fs-2 fw-bold text-white">{number}</div>
                        <div className="col-md-9 text-white">{name}</div>
                    </div>
                </div>)
            }
        </section>
    );
};

export default RecentAppointmentsCard;