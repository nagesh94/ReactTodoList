import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'


import React from 'react'

const useStyles = makeStyles((theme)=>
({
    appbar:{
        background: 'linear-gradient(60deg, #FE6b9B 50%, #FF8E53 20%)',
        border: 0,
       
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        
        padding: '0 30px',
    },
    root:{
      display:"flex",
      justifyContent:"center"
    },
    text:{
        textShadow: "3px 3px 10px #ff0000"
    }
}))


function Header() {

const classes=useStyles()    
  return (
      
    <div   >
        <AppBar position='static' className={classes.appbar}>
            <Toolbar className={classes.root} >
               
                <Typography 
                
                variant='h3' className={classes.text}>TODO LIST</Typography>
            </Toolbar>
        </AppBar>
    </div>

  )
}

export default Header