import React, { useState } from 'react';

function VideoPlayer({ src, title, isActive }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`video-container`} style={{ marginTop: '56px', width: '100%', height: 'calc(100vh - 56px)' }}>
      <div className={`video-player card shadow bg-white rounded ${isActive ? 'active' : ''}`} style={{ width: '100%', height: '100%' }}>
        <video src={src} autoPlay={isPlaying} loop={true} style={{ width: '100%', height: '100%' }} />
        <div className="controls">
        <video width="640" height="260" controls>
        <source src="aaj  me aa(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <button onClick={handlePlayPause} className="btn btn-primary">{isPlaying ? 'Pause' : 'Play'}</button>
          <p>{progress}</p>
        </div>
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
