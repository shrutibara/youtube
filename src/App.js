import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

const sampleVideos = [
  '"D:\youtube-shorts-app\public\aaj  me aa(1).mp4"',
  'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4',
  'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4',
  // Add more sample videos as needed
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.touches[0].clientY;
    if (touchStart - touchEnd > 50 && activeIndex < sampleVideos.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (touchEnd - touchStart > 50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">YouTube Shorts</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#videos">Videos</Nav.Link>
        </Nav>
      </Navbar>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 p-0">
            <div className="sidebar bg-dark" style={{ height: '100%' }}>
              {/* Sidebar content */}
              <ul className="list-unstyled m-0 p-0 text-white">
                <li className="mb-2">HISTORY</li>
                <li className="mb-2">LIKES</li>
                <li className="mb-2">YOUR CHANNEL</li>
              </ul>
            </div>
          </div>

          {/* Video Player Section with scrolling */}
          <div className="col-md-10" style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 56px)' }}>
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="app" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    {sampleVideos.map((video, index) => (
                      <VideoPlayer
                        key={index}
                        src={video}
                        title={`Video ${index + 1}`}
                        isActive={index === activeIndex}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
