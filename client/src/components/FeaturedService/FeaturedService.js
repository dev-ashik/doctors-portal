import React from 'react';
import treatment from '../../images/treatment.png';

const FeaturedService = () => {
    return (
        <section className='pb-0 pb-md-5 my-5'>
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img className='img-fluid' src={treatment} alt="" />
                    </div>
                    <div className='col-md-7 align-self-center'>
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sint distinctio voluptatum, cupiditate sit ea dignissimos placeat impedit officiis ducimus enim quam eligendi vitae ex harum voluptatibus inventore? Dolorum, in.</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;