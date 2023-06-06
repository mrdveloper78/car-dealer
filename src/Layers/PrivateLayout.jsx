import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Utils/Login/Components/Login';
import SignUp from '../Utils/Login/Components/SignUp';


const PrivateLayout = () => {
    return (
        <div>
            <Routes>
                <Route path="/app/login" element={<Login />} />
                <Route path="/app/signup" element={<SignUp />} />
            </Routes>
        </div>
    )
}


export default PrivateLayout;
