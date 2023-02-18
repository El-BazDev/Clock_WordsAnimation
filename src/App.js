import { useEffect, useState } from 'react';
import './App.css';
import HeadNav from './Components/Navbar/HeadNav'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arr] = useState(['Hello world!',"Bonjour monde!",'مرحبا بالعالم!','ハロー・ワールド!','Здравствуй, мир!',''])

  useEffect(() => {
    arr[currentIndex] == arr.slice(-1) && setToggle(!toggle)
    const intervalId = setInterval(() => {
      if (currentIndex === arr.length - 1) {
        clearInterval(intervalId);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentIndex, arr]);

  const [toggle,setToggle] = useState(true)

  return (
    <div className="App" >
      {toggle && <h1 className="fade-in" style={{ animationDelay: `${currentIndex * 1000}ms` }}>{arr[currentIndex]}</h1> }
      {toggle===false && <HeadNav/>}
    </div>
  );
}

export default App;
