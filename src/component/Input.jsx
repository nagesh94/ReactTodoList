import { Button, Fab, TextField } from '@material-ui/core'
import { Add, Edit } from '@material-ui/icons'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTask } from '../redux/slice'

function Input() {

  const dispatch=useDispatch()
  const [data,setdata]=useState('')
  const [value,setValue]=useState([])
  const ind=useSelector(state=>state.tasks.index)
  const newData=useSelector(state=>state.tasks.value)
  const changeHandler=(event)=>
  {
    setdata(event.target.value)
  }
  const send=()=>
  { 

    setValue([...value,data])
    setdata('')
  }
  useEffect(()=>{
    dispatch(setTask(value))
  },[value])
 
  useEffect(()=>{
  
    setValue(newData)
  },[ind])
 
  console.log(ind)
  console.log(value)
  return (
    
    <div style={{display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin:"50px 40px"
    }}>

      <div style={{display:"flex",alignItems:"center"}}>
        <Edit/>
        <TextField label="Task" variant='filled' color='primary' 
    onChange={changeHandler}></TextField></div>
    
    <Fab variant='round' style={{marginTop:"10px"}} variant="contained" color='secondary'
    onClick={send} ><Add/></Fab>
    </div>
  )
}

export default Input