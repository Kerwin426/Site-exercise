import logo from './logo.svg';
import './App.css';
import React from 'react';
//引入react是为了使得所有的JSX语句能转为React.createElement()
//src中存储源码，并嵌入到public中的index.html，从而使得浏览器上能够显示出来
//JSX语句就是HTML+JS
//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You are welcome！
        </p>
      </header>
    </div>
  );
}

export default App;
