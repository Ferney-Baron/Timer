import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimerApp } from './TimerApp';
import './scss/app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerApp />
  </React.StrictMode>,
)
