import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact my-5 py-5'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h5 className='text-uppercase' style={{color: '#1CC7C1'}}>contact us</h5>
                    <h1 className='mb-5' style={{color: 'white'}}>Always Connect With Us</h1>
                </div>
                <div className='d-flex justify-content-center text-center'>
                    <form>
                        <input className='w-100 my-1 p-2 ps-3' type="text" placeholder='Email Address*' />
                        <input className='w-100 my-1 p-2 ps-3' type="text" placeholder='Subject*' />
                        <textarea className='w-100 my-1 p-2 ps-3' name="" id="" cols="30" rows="7" placeholder='Your Message'></textarea>
                        <input className='text-center my-1 py-1 px-5 text-white btn btn-primary'  type="submit" value="SUBMIT"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;