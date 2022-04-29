import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {name, img, price, description, _id} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
            navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{service.name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={ () => navigateToServiceDetail(_id)} className='btn btn-primary'>Book : {name}</button>
        </div>
    );
};

export default Service;