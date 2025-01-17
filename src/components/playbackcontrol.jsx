import React, { useState, useRef } from 'react';

let currentlyPlayingVideo = null; //Global variable to check if Video's playing
let currentlyVisibleVideo = null; //Global variable to check if Video's visible


const VideoControl = ({
  videoUrl,
  buttonColor,
  buttonHoverColor,
  backgroundColor,
  backgroundColorOnPlay,
  position,
  buttonText
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  // Function to toggle video visibility and background color
  const toggleVideo = () => {
    // If there's another visible video, hide it and reset its state
    if (currentlyVisibleVideo && currentlyVisibleVideo !== videoRef.current) {
      currentlyVisibleVideo.pause(); // Stop playback of the previous video
      currentlyVisibleVideo.style.opacity = 0; // Hide the previous video
      document.body.style.backgroundColor = backgroundColor; // Reset background color
      
    }
  
    // Handle the current video toggle
    if (currentlyVisibleVideo === videoRef.current) {
      // If the current video is already visible, hide it
      videoRef.current.pause();
      videoRef.current.style.opacity = 0;
      document.body.style.backgroundColor = backgroundColor; // Reset background color
      currentlyVisibleVideo = null; // Clear the global reference
    } else {
      // Show the current video and set it as the active one
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.style.opacity = 1; // Ensure visibility
        document.body.style.backgroundColor = backgroundColorOnPlay; // Set new background color
        currentlyVisibleVideo = videoRef.current; // Update the global reference
      }
    }
  };
  
  
  



  // Pause or play video based on visibility state and change background color
  if (videoRef.current && !isVisible) {
    videoRef.current.pause(); // Pause the video when not visible
    document.body.classList.remove('new-background'); // Remove new background
    document.body.classList.add('normal-background'); // Add normal background
  } else if (videoRef.current && isVisible) {
    videoRef.current.play(); // Play the video when visible
    document.body.classList.remove('normal-background'); // Remove normal background
    document.body.classList.add('new-background'); // Add new background
  }

  return (
    <div
      className="anchor-container"
      style={{
        left: position.left,
        top: position.top,
        position: 'absolute', // Absolute positioning for dynamic placement
      }}
    >
      <video
        preload="auto"
        ref={videoRef}
        src={videoUrl}
        loop
        style={{
          opacity: isVisible ? 1 : 0, // Toggle opacity based on visibility
          transition: 'opacity 0.5s ease', // Smooth transition for opacity change
          width: '250px', // You can adjust the video size here
          height: 'auto',
          position: 'relative', // Keep video positioned within anchor container
          zIndex: 0, // Keep video behind the button
          border: '2px solid black', // Optional: border for the video
        }}
      ></video>

      {/* Button to toggle visibility of the video */}
      <button
        onClick={toggleVideo}
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '100px', // Adjust button's top position,
          left: '0px',
          padding: '13px 20px', // Button padding
          fontSize: '16px', // Font size for the button
          color: 'rgba(0, 0, 0, 0.66)', // Button text color
          backgroundColor: buttonColor, // Button color from props
          border: 'none', // No border for the button
          borderRadius: '5px', // Rounded corners for the button
          cursor: 'pointer', // Change cursor on hover
          transition: 'background-color 0.3s ease', // Smooth transition for background color
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverColor)} // Change on hover
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonColor)} // Reset on hover out
      >
        {buttonText}
      </button>
    </div>
  );
};

export default VideoControl;
