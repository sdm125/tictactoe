import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OnlinePlayers from '../OnlinePlayers';

function Home() {
  const [showOnlinePlayers, setShowOnlinePlayers] = useState(false);
  return (
    <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      {showOnlinePlayers ? (
        <OnlinePlayers />
      ) : (
        <div>
          <p style={{ textAlign: 'center' }}>
            Welcome! How would you like to play?
          </p>
          <Link to='/game/two-player/'>
            <button className='btn' style={{ marginRight: '10px' }}>
              Two Player
            </button>
          </Link>

          <button
            className='btn'
            onClick={() => setShowOnlinePlayers(!showOnlinePlayers)}
          >
            Play Online
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
