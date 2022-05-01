import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../images/login.png';
import './login.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './Firebase.config';
import '../../App.css'
import { UserContext } from '../../App';
// import { useHistory, useLocation } from "react-router-dom";


const app = initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // let history = useHistory();
    // let location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user, setUser] = useState({
        email: '',
        isLogedIn: false
    })
    const [errorMesage, setErrorMessage] = useState("");
    const [haveAccount, setHaveAccount] = useState(true)

    const handleSignUp = (uData, event) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, uData.userName, uData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            const newUser = {
                ...user
            }
            newUser.email = user.email;
            newUser.isLogedIn = true;
            
            setUser(newUser);
            setLoggedInUser(newUser);
            // history.replace(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        });
        event.preventDefault();
        event.target.reset();
    }

    const handleLogin = (uData, event) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, uData.userName, uData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            const newUser = {
                ...user
            }
            newUser.email = user.email;
            newUser.isLogedIn = true;

            setUser(newUser);
            setLoggedInUser(newUser);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        });
        event.preventDefault();
        event.target.reset();
            }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            const newUser = {
                ...user
            }
            newUser.email = '';
            newUser.isLogedIn = false;
            setUser(newUser)
            setLoggedInUser(newUser);

        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div className='row'>
            <div className="col-6 d-flex justify-content-center">
                {
                    !haveAccount && <form className='signUpform' onSubmit={handleSubmit(handleSignUp)}>
                    <p className='text-center mb-3 pageTitle'>Login</p>
                    <p>User: {user.email}</p>
                    <div>
                        <label className='loginInputLabel' htmlFor="userName">User name</label><br />
                        <input className='loginInputField' {...register("userName", { required: true })} />
                        {errors.userName && <span className='text-danger'>User name is required</span>}
                    </div>
                    
                    <div>
                        <label className='loginInputLabel' htmlFor="password">Password</label><br />
                        <input className='loginInputField' {...register("password", { required: true })} type='password' />
                        {errors.password && <span className='text-danger'>Password is required</span>}
                    </div>
                    <button className='forgetPassword'>Forgot your password?</button><br />
                    {
                        errorMesage && <p className='text-danger'>{errorMesage}</p>
                    }
                    {
                        user.email ? <button className='loginSubmitButton btn btn-brand' onClick={logOut}>Sign Out</button> : <input className='loginSubmitButton btn btn-brand' type="submit" value='Sign Up' />
                    }
                    <button className='textButton' onClick={()=> setHaveAccount(true)}>Have an account</button>
                </form>
                }
                {
                    haveAccount && <form className='loginform' onSubmit={handleSubmit(handleLogin)}>
                    <p className='text-center mb-5'>Login</p>
                    <p>User: {user.email}</p>
                    <div>
                        <label className='loginInputLabel' htmlFor="userName">User name</label><br />
                        <input className='loginInputField' {...register("userName", { required: true })} />
                        {errors.userName && <span className='text-danger'>User name is required</span>}
                    </div>
                    
                    <div>
                        <label className='loginInputLabel' htmlFor="password">Password</label><br />
                        <input className='loginInputField' {...register("password", { required: true })} type='password'/>
                        {errors.password && <span className='text-danger'>Password is required</span>}
                    </div>
                    <button className='forgetPassword'>Forgot your password?</button><br />
                    {
                        errorMesage && <p className='text-danger'>{errorMesage}</p>
                    }
                    {
                        user.email ? <button className='loginSubmitButton btn btn-brand' onClick={logOut}>Sign Out</button> : <input className='loginSubmitButton btn btn-brand' type="submit" value='Sign in' />
                    }
                    <button className='textButton' onClick={()=> setHaveAccount(false)}>Create An Account</button>
                </form>
                }
                
            </div>
            <div className="col-6">
                <img src={login} alt="login" height='700'/>
            </div>
        </div>
    );
};

export default Login;