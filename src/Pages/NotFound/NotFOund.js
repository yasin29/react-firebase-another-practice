import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'

const NotFOund = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default NotFOund;