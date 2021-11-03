import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './GetService.css';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import BookService from './BookService';


const GetService = () => {
    const {serviceId} = useParams();

    const [servicesDetails, setServicesDetails] = useState([])
        useEffect( () => {
            fetch(`https://afternoon-hamlet-58966.herokuapp.com/service-details/${serviceId}`)
            .then(res => res.json())
            .then(data => setServicesDetails(data));
        } ,[])

    // let getService = servicesDetails.find((service) => service._id === serviceId);

    return (
        <div className="knowServiceDetail mb-5">
            <div className=" row">
            <div className="col-md-6"><img src={servicesDetails.img} alt=" " /></div>
            <div className="col-md-6 mt-5">            
            <h2>{servicesDetails.name}</h2>
            <p>{servicesDetails.description}</p>
            <Nav.Link as={HashLink} className="book-btn btn mx-auto" to={`/service/${serviceId}#bookservice`}>BOOK SERVICE</Nav.Link>
            </div>
            </div>
        
            <div>
              <BookService serviceDetails={servicesDetails}></BookService>
            </div>
        
        </div>
        
    );
};

export default GetService;