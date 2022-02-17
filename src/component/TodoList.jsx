import { Button, Card, CardContent, Checkbox, Grid, TextareaAutosize, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { delTask } from '../redux/slice'

const useStyles = makeStyles((theme) =>
({
    grid:{
        border:(props)=>(props.dt?props.deadline?"solid red 5px":'solid green 5px':"solid blue 5px"),
        margin:10,
        boxShadow:" 10px 10px 30px 10px #888888;"
    },
    cardcontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  taskname: {
    color: "red",
    textDecoration: (props)=>(props.cond?"line-through":'')
  },
  date:{
    margin:20,
    padding:10,
    border:"solid green 2px",
    borderRadius:10
  },
  textarea:{
    marginBottom:20,
    padding:10,
    border:"solid black 3px",
    width:'auto',
    boxSizing:"border-box"

  },
  checkbox:{
    marginBottom:10,
    transform:"scale(1.9)"
  },
  deadline:{
      color:"red"
  },
  go:{
      color:"green"
  },
  setdate:{
      color:"blue"
  }
}))

function TodoList(props) {
    const [cond,setCond]=useState(false)
    const [deadline,setDeadline]=useState(false)
    const [dt,setDt]=useState("")
    const classes = useStyles({cond,deadline,dt})
    const ref=useRef()
    var now = new Date();
    console.log(now)

    useEffect(()=>
    {
        if(dt.valueOf()<now.valueOf())
        {
            setDeadline(true)
            
        }
        else
        setDeadline(false)
    },[dt])
    

    const date = (event) => {
        
    
        var date = new Date(event.target.value)

        setDt(date)
       //dt = 
       
        
      }
      console.log(dt)
      const del=(i)=>
      { 
        dispatch(delTask(i))
        
      }
      const check=(event)=>
      {
     
        setCond(!cond)
        
        }  
      const dispatch=useDispatch()



  return (
  <> <Grid item xs={12} sm={3} key={props.index} >
    <Card sx={{ maxWidth: 345 }} className={classes.grid}>
      <CardContent className={classes.cardcontent}>
        <Typography variant='h3'>{`Task ${props.index + 1}`}</Typography>
        <Typography  ref={ref} className={classes.taskname} variant='h3'>{props.task}</Typography>
        <input type='date' className={classes.date} onChange={date} />
        <TextareaAutosize className={classes.textarea}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Task Description"

          style={{ width: 200 }}
        />
        <Checkbox color="secondary" className={classes.checkbox}  onChange={check} />
        <Button variant='contained' color='primary' onClick={()=>del(props.index)}><Delete/></Button>
        {dt? deadline?<Typography variant='h4' className={classes.deadline}>Deadline passed</Typography>:
        <Typography variant='h4' className={classes.go}>Good to Go!</Typography>:
        <Typography variant='h4' className={classes.setdate}>Set Deadline</Typography>}
      </CardContent>
    </Card>
  </Grid>
  </> 
  )
}

export default TodoList