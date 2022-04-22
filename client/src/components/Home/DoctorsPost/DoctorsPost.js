import React from 'react';

const DoctorsPost = ({info}) => {
    return (
        <div className='col-md-4 mt-5 pt-5'>
            <div class="text-center">
                <img src={info.img} alt="" height="200"/>
                <h6 className='mt-2'>{info.name}</h6>
                <small className='card-text text-secondary'>{info.phone}</small>
            </div>
        </div>
    );
};

export default DoctorsPost;