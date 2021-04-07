import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonSignUp = () => {
    return (
        <>
        <Link to="sign-up">
            <button className="btn__signup">Sign Up</button>
        </Link>
    </>
    );
}

export default ButtonSignUp;
