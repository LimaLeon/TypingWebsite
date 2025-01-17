import React, { useState, useRef } from 'react';

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
    setIsVisible((prevState) => !prevState); // Toggle the visibility state
    
    if (!isVisible) {
      document.body.style.backgroundColor = backgroundColorOnPlay; // Set the background color when playing
    } else {
      document.body.style.backgroundColor = backgroundColor; // Reset the background color when paused
    }
  };

  // Video style settings
  const videoStyle = {
    opacity: isVisible ? 1 : 0, // Toggle opacity based on visibility state
    transition: 'opacity 0.5s ease', // Smooth transition for opacity change
    width: '250px', // Adjust video size here
    height: 'auto',
    position: 'relative', // Keep video positioned within anchor container
    zIndex: 0, // Keep video behind the button
    border: '2px solid black', // Optional: border for the video
  };

  // Button style settings
  const buttonStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '100px', // Adjust button's top position
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
  };

  // On hover, change the button's background color
  const handleMouseEnter = (e) => (e.target.style.backgroundColor = buttonHoverColor);
  const handleMouseLeave = (e) => (e.target.style.backgroundColor = buttonColor);

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
        style={videoStyle}
      ></video>

      {/* Button to toggle visibility of the video */}
      <button
        onClick={toggleVideo}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default VideoControl;
