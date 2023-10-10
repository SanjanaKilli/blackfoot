import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<CreateAccount />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
