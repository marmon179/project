import React from 'react';
import './App.css';
import Routes from './Routes';
import Header from './pages/header/Header';
import AuthLogin from "./pages/authLogin/AuthLogin";
import AuthRegistr from "./pages/authRegistr/AuthRegistr";
import AuthForgotPassword from "./pages/authForgotPassword/AuthForgotPassword";
import AurhForgorNewPassword from "./pages/aurhForgorNewPassword/AurhForgorNewPassword";
import AuthForgotPasswordCheckEmail from "./pages/authForgotPasswordCheckEmail/AuthForgotPasswordCheckEmail";


function App() {
    return (
        <div className="App">
            <Header/>
            <AuthLogin />
            <AuthRegistr />
            <AuthForgotPassword />
            <AuthForgotPasswordCheckEmail />
            <AurhForgorNewPassword />
            <Routes/>
        </div>
    );
}

export default App;
