import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// document.querySelector('.web-root').innerHTML = '<h1>Unicode Academy</h1>';

 const root = ReactDOM.createRoot(document.querySelector('.web-root'));

//  const h1 = document.createElement('h1');
//  h1.innerHTML = 'Unicode Academy';


// root.render(<App />);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
