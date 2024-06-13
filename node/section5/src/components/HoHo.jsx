import React from 'react';
import useToggle from '../Hook/useToggle';

export default function HoHo() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
      {isVisible && <p>Here are some details you can now see!</p>}
    </div>
  );
}