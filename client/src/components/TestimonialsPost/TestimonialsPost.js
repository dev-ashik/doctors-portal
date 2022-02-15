import React from 'react';

const TestimonialsPost = ({info}) => {
    return (
        <div className='col-md-4 mt-5 pt-5'>
            <div className="card info-card">
                <div class="card-body">
                    <p class="card-text mb-5">{info.quort}</p>
                    <div className='d-flex justify-content-cente'>
                        <div className='me-3'>
                            <img src={info.img} alt="" height="45"/>
                        </div>
                        <div>
                            <h6 style={{color: '#1CC7C1'}}>{info.name}</h6>
                            <small>{info.from}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPost;