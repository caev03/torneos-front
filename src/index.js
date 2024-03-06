import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route} from "react-router-dom";


const element = document.getElementById('root')
const root = ReactDOM.createRoot(element);

root.render(
        <BrowserRouter>
                <AuthProvider>
                        <Routes>
                                <Route path="/*" element={<App/>} />
                        </Routes>
                </AuthProvider>
        </BrowserRouter>
);

