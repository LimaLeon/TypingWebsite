import React from 'react';
import VideoControl from './components/playbackcontrol'; // Import VideoControl component
import './App.css';

function App() {
  
  

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reset height to calculate correctly
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to content height
    
    
    // Ensure the textarea is always in view, with smooth scroll
    textarea.scrollIntoView({ behavior: "smooth", block: "end" });
  };  

  return (
    <div className="App">
      <h1>Hello There, You Piezes of Piss!</h1>

      {/* First video control */}
      <VideoControl
        videoUrl="./typefaster.mp4" // Music Video File
        buttonColor="#31602b" // Button color
        buttonHoverColor="#3d8234" // Hover color for button
        backgroundColor="#cdd745" // Background color when not playing
        backgroundColorOnPlay="#31602b" // Background color when video is playing
        position={{ left: '15%', top: '45%' }} // Position of the video and button
        buttonText = "Dark Mode"
      />

      {/* Second video control */}
      <VideoControl
        videoUrl="./dolphon.mp4"  // Music Video File
        buttonColor="#fdeb8e" // Button color (e.g., tomato color)
        buttonHoverColor="#fdea00" // Hover color (e.g., darker tomato)
        backgroundColor="#cdd745" // Default background color
        backgroundColorOnPlay="#fdeb8e" // Background color when playing
        position={{ left: '85%', top: '45%' }} // Different position for the second video
        buttonText= "Light Mode"
      />

      {/* Text Box Component */}
      <div className="text-box-container">
        <textarea
          className="text-box"
          placeholder="Type something here..."
          onInput={handleInput} // Adjust height dynamically
        ></textarea>
      </div>

    </div>
  );
}

export default App;
