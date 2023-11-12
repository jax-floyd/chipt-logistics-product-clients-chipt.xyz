import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';

import Header from './components/Header';

import Home from './screens/Home';
import Error from './screens/Error';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={
                            <div class="absolute inset-0 z-0 flex flex-1 flex-col w-full bg-white overflow-x-hidden animate-fade">
                                <Header />
                                <Home /> 
                                <Footer />
                            </div>
                        } 
                    />
                    <Route path="/*" element={
                            <div class="absolute inset-0 z-0 flex flex-1 flex-col w-full bg-white overflow-x-hidden">
                                <Header />
                                <Error /> 
                                <Footer />
                            </div>
                        } 
                    />
                </Routes>
            </UserContextProvider>
        </Router>
    );
}

export default App;
