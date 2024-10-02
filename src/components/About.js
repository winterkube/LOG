import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './About.css';

import logoImage from "./images/log logo.png";
import constructImage from './images/construct.png';
import hexaUpload from "./images/hexaupload.png";
import hexaOpen from "./images/hexaopen.png";
import hexaFree from "./images/hexafree.png";

function About() {
    return (
        <div className="about">

            <div id="logo" style={{textAlign: 'center'}}>
                <img src={logoImage} alt="Logo" height={250}/>
            </div>

            <h4> About LOG </h4>

            <h1> LOG ("League Of Griefers") is a programming project created by a group of friends in Canada,
                as a means to help video game developers/players thrive together in a free, public and supportive environment. </h1>

            <h3>  <br/>  <br/>  <br/>  </h3>

            <div className = "hexaContainer">

                <img src={hexaUpload} alt="Logo" height={220} className = "hexImage"/>

                <div className = "hexContent">
                    <div className = "hexTitle"> UPLOAD <br/> </div>
                    <div className = "hexDesc"> Anyone can contribute and upload their very own games for others to play in the ‎
                        <Link to="/LOG/games" title="Games">
                             games
                        </Link>
                        ‎ section. Make sure it is compatible with HTML!</div>
                </div>

            </div>

            <div className = "hexaContainer">

                <img src={hexaOpen} alt="Logo" height={220} className = "hexImage"/>

                <div className = "hexContent">
                    <div className = "hexTitle"> OPEN SOURCE <br/></div>
                    <div className = "hexDesc"> LOG is open source for everyone and can be viewed at our public github ‎

                        <Link to="https://github.com/winterkube/LOGwebsite" title="Github repo" target="_blank">
                            repository.
                        </Link>

                        ‎ Devs can choose to upload and keep their games as open source or closed. </div>
                </div>
            </div>

            <div className = "hexaContainer">
                <img src={hexaFree} alt="Logo" height={220} className = "hexImage"/>

                <div className = "hexContent">
                    <div className = "hexTitle"> FREE <br/> </div>
                    <div className = "hexDesc"> LOG is a non-profit project.
                        We strive for our platform to be as accessible as possible to everyone! </div>
                </div>
            </div>

            <h6> LOG STAFF </h6>

            <h1>
               Riley Su
            </h1>


        </div>

    );
}

export default About;