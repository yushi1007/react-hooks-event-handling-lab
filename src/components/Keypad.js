// Code Keypad Component Here
import React from "react";
// Keypad React component
function Keypad() {
    // add an event handler that listens for the change event
    function handleChange(event) {
        // When that event fires, use console.log to print out the text 'Entering password...'.
      console.log('Entering password...');
    }
  
    return (
        // render an input with the right type
        <input
        type="password"
        // On that input, add an event handler that listens for the change event.
        onChange={handleChange}
      />
    );
  }
  
  export default Keypad;
  