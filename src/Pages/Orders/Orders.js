import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState();
    useEffect(()=>{

        const getOrders = async ()=>{
            const email = user.email;
            const url = `https://glacial-forest-54030.herokuapp.com/order?email=${email}`;
            const {data} = await axios.get(url, {
                headers: {
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrders(data);
        } ;
        getOrders();

    },[])

    console.log(orders)
    return (
        <div>
            <h2>Your Orders: {orders?.length}</h2>
        </div>
    );
};

export default Orders;