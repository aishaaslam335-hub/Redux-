
import Typography from "@mui/material/Typography"
import * as React from "react"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
import Paper from "@mui/material/Paper"

 export default function App() {

    const dispatch= useDispatch()
    const count= useSelector((state)=>state.counter.value)
  return (
    <React.Fragment>
      <Box sx={{display:"flex" , justifyContent:"center" ,flexDirection:"column", space:"3" , marginTop:12 ,pl:22 , pr:22}}>
     <Paper elevation={15}>
    <Typography variant="h4" sx={{fontWeight:"bold"}}>{count}</Typography>
    <Box  sx={{display: "flex", gap: 2 , justifyContent:"center" , marginTop:3}} >

    <Button variant="contained"  onClick={() =>{dispatch(increment())}}>Increment</Button>
    <Button variant="contained" onClick={() => {dispatch(decrement())}}>Decrement</Button>

  </Box>
  </Paper>
    </Box>
    
    </React.Fragment>
    
  )
}

