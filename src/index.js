import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/home.css'
import './style/booking.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter } from 'react-router-dom';
import './style/navbar.css'
import './style/photos.css'
import '../src/style/homepage.css'
import '../src/style/leads.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

























