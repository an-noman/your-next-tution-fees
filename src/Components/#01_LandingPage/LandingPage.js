import React from 'react';
import { useNavigate } from 'react-router';
import './LandingPage.css';


export default function LandingPage() {
    const navigate = useNavigate();


    const goToSelection = ()=>{
        navigate('/selection');
    };

    const goToYoutube = ()=>{
        navigate('/youtube');
    };
   
    return (
        <div className="landingPage-container">

            <div className="logo-container">
            <i class="fas fa-book-reader"></i>
            </div>
            
            <div className="landingPage-header">
                <h1>Eastern University</h1>
                <p>Distinction In Education</p>
            </div>

            <div className="button-container" onClick={()=>goToSelection()}>
                <i className="fas fa-chevron-right"></i>
            </div>


            <div className="learnMore-button" onClick={()=>goToYoutube()}>
                <p>Learn</p>
                <i className="fab fa-youtube-square"></i>
            </div>
        </div>
    )
}
