import React from 'react';
import About from './About/About';
import Mission from './Mission/Mission';
import Banner from './Banner/Banner';
import FrontWarriors from './FrontWarriors/FrontWarriors';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
           <Services></Services>
           <FrontWarriors></FrontWarriors>
           <Mission></Mission>
           <About></About>
        </div>
    );
};

export default Home;