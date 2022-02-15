import React from 'react';
import wilson from '../../images/wilson.png';
import ema from '../../images/ema.png';
import aliza from '../../images/aliza.png';
import TestimonialsPost from '../TestimonialsPost/TestimonialsPost';
import './Testimonials.css';

const testimonialData = [
    {
        quort: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam perspiciatis odio sint ratione numquam dignissimos ipsam ab sit non accusamus corrupti est a placeat. Blanditiis rem modi totam sit.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quort: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam perspiciatis odio sint ratione numquam dignissimos ipsam ab sit non accusamus corrupti est a placeat. Blanditiis rem modi totam sit.',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quort: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam perspiciatis odio sint ratione numquam dignissimos ipsam ab sit non accusamus corrupti est a placeat. Blanditiis rem modi totam sit.',
        name: 'Aliza farari',
        from: 'California',
        img: aliza
    }
]
const Testimonials = () => {
    return (
        <section className='testimonials my-5 py-5'>
            <div className='container'>
                <div className='section-header'>
                    <h5 className='text-uppercase' style={{color: '#1CC7C1'}}>Testimonials</h5>
                    <h1>what Our Patients <br />Says</h1>
                </div>
                <div className='row'>
                    {
                        testimonialData.map(info => <TestimonialsPost info={info}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;