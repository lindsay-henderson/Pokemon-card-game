// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import foods from './foods'
import {choice, remove} from './helpers';

let food = choice(foods)
console.log(`i'd like one ${food}, please`)
console.log(`here you go ${food}`)

let remaining = remove(foods, food)
console.log(foods.length)

console.log(`i'm sorry, we're all out.  we have ${remaining} left`)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
