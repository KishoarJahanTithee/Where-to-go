import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    // const {id, name, img, description} = service;
    return (
        <div className="card service text-center mx-auto col-3">
           <h4>{service.name}</h4>
            <p>{service.description}</p>
            <img src={service.img} alt="" />
            <Link to={`/service/${service._id}`}>
            <button className="btn btn-light">Details</button>
            </Link>
           
        </div>
    );
};

export default Service;