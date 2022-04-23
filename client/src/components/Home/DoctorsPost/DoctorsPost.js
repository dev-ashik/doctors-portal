import React from 'react';

const DoctorsPost = ({doctor}) => {
    return (
        <div className='col-md-4 mt-5 pt-5'>
            <div class="text-center">
                <img style={{height: '150px', width: '150px'}} src={`http://localhost:5000/${doctor.img}`} alt="" height="200"/>
                <h6 className='mt-2'>{doctor.name}</h6>
                <small className='card-text text-secondary'>{doctor.email}</small>
            </div>
        </div>
    );
};

export default DoctorsPost;