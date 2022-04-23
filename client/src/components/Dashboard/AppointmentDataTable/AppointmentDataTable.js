import React from 'react';

const AppointmentDataTable = ({appointments}) => {
    return (
        <div style={{boxShadow: '1px 1px 10px lightgray'}} className='p-3'>
            <table className='w-100'>
                <thead>
                    <tr className='mt-5 pb-3'>
                        <th className='fw-normal pe-3 pb-4'>Sr.No</th>
                        <th className='fw-normal pe-3 pb-4'>Name</th>
                        <th className='fw-normal pe-3 pb-4'>Gender</th>
                        <th className='fw-normal pe-3 pb-4'>Age</th>
                        <th className='fw-normal pe-3 pb-4'>Weight</th>
                        <th className='fw-normal pe-3 pb-4'>Phone</th>
                        <th className='fw-normal pe-3 pb-4'>Email</th>
                    </tr>
                </thead>
            {
                appointments.map((appointment, index) => 
                        <tbody>
                            <tr>
                                <td className='fw-bold pe-3 pb-2'>{index+1}</td>
                                <td className='fw-bold pe-3 pb-2'>{appointment.name}</td>
                                <td className='fw-bold pe-3 pb-2'>{appointment.gender}</td>
                                <td className='fw-bold pe-3 pb-2'>{appointment.age}</td>
                                <td className='fw-bold pe-3 pb-2'>{appointment.weight}</td>
                                <td className='fw-bold pe-3 pb-2'>{appointment.phoneNumber}</td>
                                <td className='fw-bold pe-3 pb-2'>{appointment.email}</td>
                            </tr>
                        </tbody>
                   
                )
            }
             </table>
        </div>
    );
};

export default AppointmentDataTable;