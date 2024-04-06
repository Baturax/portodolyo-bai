import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const api = "https://api.lanyard.rest/v1/users/1224088617270382763";

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setUserData(data.data.spotify);
      })
      .catch(error => console.error('Hata:', error));
  };

  const formatTimestamp = timestamp => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };
  
  return (
    <div className="App"> 

      <div className='as'>
        {userData && userData.album_art_url ? (
          <img className='resim' src={userData.album_art_url} alt="Album Art" />
          ) : (
          <div></div>
        )}

      {userData && userData.album_art_url ? (
        <h2> The song I'm listening: <span style={{ color: 'red' }}>{userData && userData.song}</span></h2>
      ) : (
        <div><h2>Not listening any music rn</h2></div>
      )}
      </div>
      
      
      <div className='sa'>
        {userData && userData.track_id && (
          <div>
            <p>{formatTimestamp(userData.timestamps.start)}🎵 ╴	╴	╴	╴	╴	╴ 🎶{formatTimestamp(userData.timestamps.end)}</p>
          </div>
        )}

        </div>

    </div>

    
    
  );
}

export default App;
//