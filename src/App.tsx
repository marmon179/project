import React from 'react';
import './App.css';
import {Login} from './pages/Login';
import {NewPassword} from './pages/NewPassword';
import {Profile} from './pages/Profile';
import {RecoveryPassword} from './pages/RecoveryPassword';
import {Registration} from './pages/Registration';
import {Test} from './pages/Test';

function App() {
    return (
        <div>
            <Login/>
            <NewPassword/>
            <Profile/>
            <RecoveryPassword/>
            <Registration/>
            <Test/>
        </div>
    );
}

export default App;
