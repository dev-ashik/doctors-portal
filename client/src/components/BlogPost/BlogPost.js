import React from 'react';

const BlogPost = ({info}) => {
    return (
        <div className='col-md-4 mt-5 pt-5'>
            <div className="card info-card">
                <div class="card-body">
                    <div className='d-flex justify-content-cente'>
                        <div className='me-3'>
                            <img src={info.img} alt="" height="45"/>
                        </div>
                        <div>
                            <h6 >{info.name}</h6>
                            <small>{info.date}</small>
                        </div>
                    </div>
                    <h5 className='my-4'>{info.blogTitle}</h5>
                    <p class="card-text text-secondary">{info.quort}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;