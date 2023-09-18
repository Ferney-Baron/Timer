import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimerApp } from './TimerApp';
import './scss/app.scss';
import { Header } from './includes/Header';
import { Footer } from './includes/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <TimerApp />
    <Footer />
  </React.StrictMode>,
)
