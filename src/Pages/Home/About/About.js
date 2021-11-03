import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about" id="about">
           <h1>Meet the <span>TEAM</span></h1>
           <div className="card mb-3 teamCard mx-auto">
  <div className="row g-0">
    <div className="col-md-4 oneMember">
      <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" className="img-fluid" alt=""/>
      <h5 className="card-title">Semous Finigun</h5>
      <small className="card-text text-muted">Senior Developer</small>
    </div>

    <div className="col-md-4 oneMember">
      <img src="https://image.freepik.com/free-vector/farmer-using-technology-digital-agriculture_53876-113813.jpg" className="img-fluid" alt=""/>
      <h5 className="card-title">Nevile Longbottom</h5>
        <small className="card-text text-muted">Backend Developer</small>
    </div>

    <div className="col-md-4 oneMember">
      <img src="https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg" className="img-fluid" alt=""/>
      <h5 className="card-title">Draco Malfoy</h5>
        <small className="card-text text-muted">Frontend Developer</small>
    </div> 

  </div>
</div>
        </div>
    );
};

export default About;