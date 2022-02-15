import React from 'react';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Doctors from '../../Doctors/Doctors';
import FeaturedService from '../../FeaturedService/FeaturedService';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blog/>
            <Doctors/>
            <Contact/>
            {/* Blogs, Doctors, Contact */}
        </div>
    );
};

export default Home;