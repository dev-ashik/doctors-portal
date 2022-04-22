import React from 'react';
import styles from './AppointmentShorList.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AppointmentShorList = ({appointments}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr className='pb-3'>
                        <th className='fw-normal pe-4'>Name</th>
                        <th className='fw-normal pe-4'>Phone</th>
                        <th className='fw-normal pe-4'>Email</th>
                        <th className='fw-normal '>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appo, index) => <tr>
                            <td className='fw-bold pe-4'>{appo.name}</td>
                            <td className='fw-bold pe-4'>{appo.phoneNumber}</td>
                            <td className='fw-bold pe-4'>{appo.email}</td>
                            <td className='fw-bold pe-4'><button className={styles.button}>Not visited <ArrowDropDownIcon/></button></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentShorList;