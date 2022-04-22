import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.css';
import AppsIcon from '@mui/icons-material/Apps';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NoteIcon from '@mui/icons-material/Note';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <section className={`${styles.sidebar} `}>
            <ul className='pt-5'>
            <FontAwesomeIcon icon="fa-solid fa-grip-dots-vertical" />
                <li className='mb-4 fs-5 fw-bold text-white'><AppsIcon /> Dashboard</li>
                <li className='mb-4 fs-5 fw-bold text-white'><EventNoteIcon/> Appointment</li>
                <li className='mb-4 fs-5 fw-bold text-white'><GroupIcon/> Patients</li>
                <li className='mb-4 fs-5 fw-bold text-white'><NoteIcon/> Prescriptions</li>
                <li className='mb-4 fs-5 fw-bold text-white'><SettingsIcon/> Setting</li>
            </ul>

            <div className={styles.logout}>
                <ul>
                    <li className='mb-4 fs-5 fw-bold text-white'><LogoutIcon /> Log Out</li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;