import React from 'react';
import './RecentAppointments.css';
import EditIcon from '@mui/icons-material/Edit';

const RecentAppontmentsTable = ({recentAppointments}) => {
    console.log(recentAppointments);
    
    return (
        <div className='RecentAppontmentsTable mb-4 p-4 rounded mt-5'>
            <div className="row">
                <div className="col-md-11">
                    <h3 className='fw-bold' style={{color: '#18D2AF'}}>Recent Appointments</h3>
                </div>
                <div className="col-md-1">
                    week
                </div>
            </div>
            <div>
                <table className='w-100'>
                    <thead>
                        <tr>
                            <th className='fw-normal p-3 ps-0'>Sr.no</th>
                            <th className='fw-normal p-3 ps-0'>Date</th>
                            <th className='fw-normal p-3 ps-0'>Time</th>
                            <th className='fw-normal p-3 ps-0'>Name</th>
                            <th className='fw-normal p-3 ps-0'>Contact</th>
                            <th className='fw-normal p-3 ps-0'>Email</th>
                            <th className='fw-normal p-3 ps-0'>Prescription</th>
                            <th className='fw-normal p-3 ps-0'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                recentAppointments.map(({name, phoneNumber, email, gender}, index) => <tr>
                                    <td  className='fw-bold p-2 ps-0'>{index+1}</td>
                                    <td  className='fw-bold p-2 ps-0'>date</td>
                                    <td  className='fw-bold p-2 ps-0'>time</td>
                                    <td  className='fw-bold p-2 ps-0'>{name}</td>
                                    <td  className='fw-bold p-2 ps-0'>{phoneNumber}</td>
                                    <td  className='fw-bold p-2 ps-0'>{email}</td>
                                    <td  className='fw-bold p-2 ps-0'><button className='prescriptionButton'>View</button></td>
                                    <td  className='fw-bold p-2 ps-0 d-flex'><button className='actionButton'>Panding</button><EditIcon className='recentAppointmentEditButton'/></td>
                                </tr>)
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentAppontmentsTable;