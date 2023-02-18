import moment from 'moment-timezone'
import React, { useEffect, useRef } from 'react'
import '../Navbar/HeadNav.css'

function ClockLA() {
    const minutes = useRef([])
    const seconds = useRef([])
    const hours = useRef([])

    function setClock(){ 
        const currentDate = moment().tz("Asia/Tokyo")
        const secondsRatio = currentDate.seconds()/60
        const minutesRatio = (secondsRatio+currentDate.minutes())/60
        const hoursRatio = (minutesRatio + currentDate.hours())/12
        setRotation(seconds.current,secondsRatio)
        setRotation(minutes.current,minutesRatio)
        setRotation(hours.current,hoursRatio)
      
      }

      const setRotation=(el,rotation) => {el.style.setProperty('--rotation',rotation*360)}

  useEffect(() => {
    setClock()
    setInterval(setClock,1000)
  }, [])
  return (
    <div  className='Clock fade-in' style={{ animationDelay: `${10}ms` }}>
    <div className='Hand Hours' ref={hours}/>
    <div className='Hand Minutes' ref={minutes}/>
    <div className='Hand Seconds' ref={seconds}/>
    <div className="number number1">1</div>
    <div className="number number2">2</div>
    <div className="number number3">3</div>
    <div className="number number4">4</div>
    <div className="number number5">5</div>
    <div className="number number6">6</div>
    <div className="number number7">7</div>
    <div className="number number8">8</div>
    <div className="number number9">9</div>
    <div className="number number10">10</div>
    <div className="number number11">11</div>
    <div className="number number12">12</div>
  </div>  )
}

export default ClockLA