import {useState, useEffect} from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://glacial-forest-54030.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return [services, setServices]
}

export default useServices;