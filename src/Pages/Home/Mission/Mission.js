import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <div className="mission row mx-auto" id="mission">
            <h1>Our <span>MISSION</span></h1>
            <div className="col-md-6 col-12 description my-auto">
            <h4>A backstaged team is continuously working to provide the best services. We are improving and our mission is to serve people so that they can enjoy their vacation fullest.<br/><br/> Hope to see you always in the vacation!</h4></div>
            <div className="col-md-6 col-12">
            <img src="https://image.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg" alt="" /></div>
        </div>
    );
};

export default Mission;