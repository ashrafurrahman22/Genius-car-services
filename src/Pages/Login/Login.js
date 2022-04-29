import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {

    const emailRef  = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
    const navigateRegister = event => {
      navigate('/register')
  }


    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('https://glacial-forest-54030.herokuapp.com/login', {email})
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
        console.log(data)
    }


    if(user){
      navigate(from, { replace: true });
    }

    const resetPassword = async() => {
      const email = emailRef.current.value;
     if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
     }
     else{
       toast('Enter your email')
     }
    }


    return (
        <div className='mx-auto w-50 my-3 py-3'>
          <PageTitle title="Login"></PageTitle>
            <h2>Please Log in</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Button variant="primary w-50 mx-auto d-block" type="submit">
    Login
  </Button>
</Form>
        <p className='text-center py-3 my-3'>New to Genius-Car?  <button onClick={navigateRegister} className='text-white px-2 py-1 rounded-3 ms-2 bg-primary'>Sign up</button> </p>
        <p className='text-center py-3 my-3'>Forget Password?  <button onClick={resetPassword} className='text-white px-2 py-1 rounded-3 ms-2 bg-primary'>Reset Password</button> </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
        </div>
    );
};

export default Login;