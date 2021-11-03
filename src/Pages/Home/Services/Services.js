import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
        
        const [services, setServices] = useState([])
        useEffect( () => {
            fetch('https://afternoon-hamlet-58966.herokuapp.com/all-services')
            .then(res => res.json())
            .then(data => setServices(data));
        } ,[])

    return (
        <div id="services">
        <div className="mt-5 service-header">
       <h2>Our <span>Services</span></h2>
        </div>
        <div className="service-container row d-flex text-center mx-auto">
            {
                services.map(service =><Service
                key={service._id}
                name={service.name}
                service={service}
                ></Service>
               )
            }
        </div>
        <NavLink to="/add-service" className="btn btn-dark"><i class="fas fa-plus"></i> Add Service</NavLink>
        </div>
    );
};

export default Services;