import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef  = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.value;
        // console.log(name)
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name,email, password)
    }
    const navigateRegister = event => {
        navigate('/login')
    }


    return (
        <div className='mx-auto w-50 my-3 py-3'>
            <h2>Please Sign Up</h2>
            <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control ref={nameRef} required type="text" placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Register  </Button>
</Form>
        <p className='text-center py-3 my-3'>Already have an Account?  <button onClick={navigateRegister} className='text-white px-2 py-1 rounded-3 ms-2 bg-primary'>Log in</button> </p>
        </div>
    );
};

export default Register;