import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const api = "https://api.lanyard.rest/v1/users/1224088617270382763";

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData(); // Her 3 saniyede bir veriyi yenile
    }, 3000);

    // Component kaldırıldığında zamanlayıcıyı temizle
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

  // Zaman damgalarını tarih ve saat formatına dönüştürmek için yardımcı fonksiyon
  const formatTimestamp = timestamp => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="App">
      <header className="App-header">

      <h2> The song I'm listening: <span className="red-text">{userData && userData.song}</span></h2>

        {userData && userData.album_art_url ? (
          <img className='resim' src={userData.album_art_url} alt="Album Art" />
        ) : (
          <div>Album Art not found</div>
        )}

        {userData && userData.track_id && (
          <div>
            <p>{formatTimestamp(userData.timestamps.start)}🎵 ╴	╴	╴	╴	╴	╴ 🎶{formatTimestamp(userData.timestamps.end)}</p>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
