import React, { useRef } from 'react'
import './video.css'


const Video = () => {
  const videoRef = useRef();



  const handlePlay = () => {
    videoRef.current.play();
    
  };
  const handleBackward = () => {
    let videotime = videoRef.current.currentTime;
    videoRef.current.currentTime = videotime - 5;
  };
  const handleForward = () => {
    let videotime = videoRef.current.currentTime;
    videoRef.current.currentTime = videotime + 5;
  };
  const handlePause = () => {
    videoRef.current.pause();
    
  };


  return (
    <div className='video'>
        <div className="heading2contianer">
          <div className="heading2">
            Video Analytics
          </div>
        </div>

        <div className="videoContainer">
              <video controls ref={videoRef} height='570px' width='1000px' className='videoBox'>
              <source src="/video.mp4"
                  type="video/mp4"/>

              </video>
              <div className="buttons">
              <button className="btn" onClick={handleBackward}>
                  5 Sec Backward
                </button>
                <button className="btn" onClick={handlePlay}>
                  Play
                </button>
                <button className="btn" onClick={handlePause}>
                  Pause
                </button>
                
                <button className="btn" onClick={handleForward}>
                  5 Sec Forward
                </button>
              </div>
        </div>
        
    </div>
  )
}

export default Video
