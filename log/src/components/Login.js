import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router
import './Login.css';
import constructImage from "./images/construct.png";

function Login() {
    // State variables
    const [showLoginForm, setShowLoginForm] = useState(true);
    const history = useNavigate(); // For navigation (if using React Router)

    // Hide the login form after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoginForm(false);
        }, 1000); // 3000 milliseconds = 3 seconds

        // Cleanup the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);

    // State variables for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Logging in with', { username, password });
    };

    // Handle "Go back home" click
    const handleGoBackHome = () => {
        // Navigate to the home page
        history('/');
    };

    // Handle "Try logging in anyway" click
    const handleTryLoginAgain = () => {
        setShowLoginForm(true);
    };

    return (
        <div className="login-container">
            {showLoginForm ? (
                // Login Form
                <form className="login-form" onSubmit={handleSubmit}>
                    <h6>LOGIN</h6>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">Login</button>

                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </form>
            ) : (
                // "Just kidding..." Message
                <div className="message">

                    <div id="construct" style={{textAlign: 'center'}}>
                        <img src={constructImage} alt="Under Construction" height={170}/>
                    </div>

                    <h4>Just kidding. <br /> </h4>
                    <h5> <br /> We're too broke to afford servers so there is no account system.
                        You can try making it work locally though. </h5>
                    <div className="links">
                        <a href="#" onClick={handleGoBackHome}>Go back home</a>
                        <span className="separator"></span>
                        <a href="#" onClick={handleTryLoginAgain}>Try logging in anyway</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
