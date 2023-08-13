import React from 'react'
import {data} from './data'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import './App.css'


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      {
        data.map((item, index)=>(
          <Body 
            key={index} item={item}
          
          />
        ))
      }

    </div>
  )
}
