import React from 'react';

const AppintmentsByDate = ({appointments}) => {
    return (
        <div>
            <h1>appointments: {appointments.length}</h1>
            {
                appointments.map(appo => <li key={appo._id}>{appo.name}</li>)
            }
        </div>
    );
};

export default AppintmentsByDate;