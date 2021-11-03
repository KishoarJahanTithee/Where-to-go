import React from 'react';
import Warrior from '../Warrior/Warrior';
import './FrontWarriors.css';

const warriors = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWp6BwwlkDZMdLuX4tWzfqHQ_NeDh_zTPKw&usqp=CAU',
        name: 'Nicolas Flammel'
       
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEG32vwqphAQW5fWWIG17450wUUCwCMrHFw&usqp=CAU',
        name: 'Luna Lovegood'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2s-ahhN51tPT_8LZkCKK8zuweJ28XIokK7A&usqp=CAU',
        name: 'Nevile Longbottom'
    }
]

const FrontWarriors = () => {
    return (
        <div id="guide" className="container">
            <h2>Tourist <span>GUIDES</span></h2>
            <div className="row mx-auto d-flex text-center doctor-container">
{
    warriors.map(warrior => <Warrior
    key={warrior.name}
    warrior={warrior}
    ></Warrior>)
}
            </div>
        </div>
    );
};

export default FrontWarriors;