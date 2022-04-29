import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import useServiceDetail from '../../../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'akbor the great',
    //     email: 'akbor@momo.taj',
    //     address : 'tajmohol',
    //     phone: '01721778884'
    // });

    // const handleAddress = event =>{
    //     const {address, ...rest} = user;
    //     const newAddresss = event.target.value;
    //     const newUser = {address: newAddresss, ...rest};
    //     setUser(newUser);
    // }
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email : user.email,
            service : service.name,
            serviceId: serviceId,
            address : event.target.address.value,
            phone : event.target.phone.value
        }
        axios.post('https://glacial-forest-54030.herokuapp.com/order', order)
        .then(res => {
            const {data} = res;
            if(data.insertedId){
                toast('Your order is booked!!')
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Order Now: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='name' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required /> <br />
                <input className='w-100 mb-2' type="text"  name='address' placeholder='address' autoComplete='off' required /> <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required /> <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;