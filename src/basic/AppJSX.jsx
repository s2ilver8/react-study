import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = "LEE";
  const list = ['우유', '딸기', '바나나'];

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>name</p>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{width: "400px", height: "500px"}} src='https://images.unsplash.com/photo-1714652232925-182c8cb2b3fc?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='moon'/>
    </>    
  );
}

export default AppJSX;
