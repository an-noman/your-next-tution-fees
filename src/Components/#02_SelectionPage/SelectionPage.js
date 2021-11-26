import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SelectionPageImg from '../../Images/SelectionPageImg.png';
import './SelectionPage.css';


export default function SelectionPage() {
    const menuData = ["Department", "Year",  "Batch", "Semester"];

    const toggleSwitch  = ()=>{
        alert("Clicked")
    };

    return (
        <>

        <div className="selectionPage-container">
        <Fade left>
            <div className="image-container">
                <img src={SelectionPageImg} alt="Eastern University"/>
            </div>
            </Fade>    
            <div className="selectionMenu-container">
                {
                    menuData.map(data => 
                        <Slide left>
                        <div className="selection-menu" onClick={()=>toggleSwitch()}>
                                <p>{data}</p>
                            <i class="fas fa-arrow-down"></i>
                        </div>
                    </Slide>
                        )
                }
                <button className="submit-button">SUBMIT</button>
            </div>
        </div>
        
        </>
    )
}
