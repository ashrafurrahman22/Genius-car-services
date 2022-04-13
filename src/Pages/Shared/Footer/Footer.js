import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='text-center my-3'>Copyright @ {year}</p>
        </footer>
    );
};

export default Footer;