import React, {useEffect} from 'react';
import './ForgotPassword.css';

import hitsfx from './sfx/hitsfx.mp3';

import walmart from "./images/walmart.jpg";

function ForgotPassword() {


    useEffect(() => {
        const audio = new Audio(hitsfx);
        audio.play().then(r => {});
    }, []);

    return (

            <div className="forgot-password2">

            </div>
    );
}

export default ForgotPassword;