import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import Input from './component/Input'
import Display from './component/Display'

function App() {
  

  return (
    <div className="App">
     <Header/>
     <div>
       <Input/>
     </div>
     <Display/>
    </div>
  )
}

export default App
