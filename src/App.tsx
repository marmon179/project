import React, {useEffect} from 'react';
import './App.css';
import Routes from './Routes';
import Header from './pages/header/Header';
import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {initializeTC} from './bll/auth-reducer';




function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>((state => state.auth.isInitialized))

    useEffect(() => {
        dispatch(initializeTC())
    }, [dispatch])

    if (!isInitialized) {
        return <div>
            ...Loading
        </div>
    }
    return (
        <div className="App">
            <Header/>
            {/*<Main />*/}
            <Routes/>
        </div>
    );
}

export default App;
