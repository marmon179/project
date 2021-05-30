import React, {useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Header from './pages/header/Header';
import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import {setUserDataTC} from './bll/app-reducer';
import {AppStoreType} from './bll/store';


function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStoreType, boolean>((state => state.auth.isInitialized))

    useEffect(() => {
        dispatch(setUserDataTC())
    }, [])

    if (!isInitialized) {
        return <div>
            ...Loading
        </div>
    }
    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
