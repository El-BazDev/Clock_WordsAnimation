import { useEffect, useState } from 'react';
import './App.css';
import HeadNav from './Components/Navbar/HeadNav';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [greetings] = useState([
    'Hello world!',
    'Bonjour monde!',
    'مرحبا بالعالم!',
    'ハロー・ワールド!',
    'Здравствуй, мир!',
    ''
  ]);

  useEffect(() => {
    if (greetings[currentIndex] === greetings.slice(-1)[0]) {
      setToggle(prev => !prev);
    }
    
    const intervalId = setInterval(() => {
      if (currentIndex === greetings.length - 1) {
        clearInterval(intervalId);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [currentIndex, greetings]);

  return (
    <div className="App">
      {toggle && (
        <h1 
          className="fade-in" 
          style={{ animationDelay: `${currentIndex * 1000}ms` }}
        >
          {greetings[currentIndex]}
        </h1>
      )}
      {!toggle && <HeadNav />}
    </div>
  );
}

export default App;
