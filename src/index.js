import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import emailjs from 'emailjs-com';

emailjs.init('ysklbnFo_qd5QgkEo'); 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


