import React, { useState } from 'react';
import './HeadNav.css';
import Clock from '../Clock/Clock';
import BaseClock from '../Clock/BaseClock';

function HeadNav() {
  const [selectedCity, setSelectedCity] = useState(1);

  const CITIES = {
    1: { name: 'Local', component: <Clock /> },
    2: { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
    3: { name: 'Doha', timezone: 'Asia/Qatar' },
    4: { name: 'Moscow', timezone: 'Europe/Moscow' },
    5: { name: 'Tokyo', timezone: 'Asia/Tokyo' }
  };

  const renderClock = () => {
    const city = CITIES[selectedCity];
    if (selectedCity === 1) return city.component;
    return <BaseClock timezone={city.timezone} />;
  };

  return (
    <div className="navbar-container" id="fade-in">
      {renderClock()}
      <div className="navbar-titles">
        {Object.entries(CITIES).map(([key, { name }]) => (
          <button
            key={key}
            onClick={() => setSelectedCity(Number(key))}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HeadNav;
