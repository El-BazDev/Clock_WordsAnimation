import React, {useState } from 'react'
import Clock from '../Clock/Clock'
import ClockDh from '../Clock/ClockDh'
import ClockLA from '../Clock/ClockLA'
import ClockMscw from '../Clock/ClockMscw'
import ClockTky from '../Clock/ClockTky'
import './HeadNav.css'

function HeadNav() {


  const [toggle,setToggle] = useState(1)


  return (
    <div className='navbar-container' id="fade-in">
   {toggle == 1 ? <Clock  /> : toggle == 2 ? <ClockLA/>: toggle == 3 ? <ClockDh/> : toggle == 4 ? <ClockMscw/> : <ClockTky/>} 

      <div className='navbar-titles'>
        <button onClick={()=>setToggle(1)}>Local</button>
        <button onClick={()=>setToggle(2)}>Los Angeles</button>
        <button onClick={()=>setToggle(3)}>Doha</button>
        <button onClick={()=>setToggle(4)}>Moscow</button>
        <button onClick={()=>setToggle(5)}>Tokyo</button>
      </div>    
    </div>
  )
}

export default HeadNav