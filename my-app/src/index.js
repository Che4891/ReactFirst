import React, {StrictMode}  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// пример простого кода

// const elem0 = <h2>Hello world!</h2> // создание елемента через JSX
// const elem1 = React.createElement('h2', {className: 'wrapper'}, 'Hello world!!!'); // создания елемента на прямую через JS
// const test = 2+2

// const elem = (
//   <div>
//     {/* {} - используеться для вывода JS кода (только строки) */}
//     <h2 className='title' >Text: {test}</h2> 
//     <input type='text' name='input'/>
//     <label htmlFor="input">Name</label>
//     <button tabIndex='0' >Click</button>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //elem

  //StrictMode - аналог строгого режима но для реакта, обезапасит от использования старого или вредоносного кода

  <StrictMode> 
    <App/>
  </StrictMode>

  // тоже свмое только StrictMode вытянул без импорта

  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
);


