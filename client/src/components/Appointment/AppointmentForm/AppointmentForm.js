import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        closeModal();
        console.log(data)
    };
    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-brand text-center'>{appointmentOn}</h2>
                <p className="text-secondary text-center">
                <small>ON {date.toDateString()}</small>
                </p>
                <form className='pt-5 pb-3 px-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className="from-group mb-2">
                        <input className='form-control' {...register("name", { required: true })} name="name" placeholder='Your Name'/>
                        {errors.name && <span className='text-danger'>Name is required</span>}
                    </div>
                    <div className="from-group mb-2">
                        <input className='form-control' {...register("phoneNumber", { required: true })} name="phoneNumber" placeholder='Phone Number' />
                        {errors.phoneNumber && <span className='text-danger'>Phone number is required</span>}
                    </div>
                    <div className="from-group mb-2">
                        <input className='form-control' {...register("email", { required: true })} name='email' placeholder='Email' />
                        {errors.email && <span className='text-danger'>Email is required</span>}
                    </div>
                    <div className='from-group row mb-2'>
                        <div className='col-4'>
                            <select className='form-control' name="gener" id="" {...register("gender", { required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className='text-danger'>Gender required</span>}
                        </div>
                        <div className="from-group col-4">
                            <input className='form-control' {...register("age", { required: true })}  name='age' placeholder='Your Age'/>
                            {errors.age && <span className='text-danger'>Age is required</span>}
                        </div>
                        <div className="from-group col-4">
                            <input className='form-control' {...register("weight", { required: true })} type="number"  name='weight' placeholder='Your weight'/>
                            {errors.weight && <span className='text-danger'>weight is required</span>}
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-end">
                        <input type="submit" className='btn btn-brand' />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;