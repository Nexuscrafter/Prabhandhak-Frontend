// components/WaveDivider.tsx
import React from 'react';

interface WaveDividerProps {
  flip?: boolean;       // Flip the wave vertically if needed
  fillColor?: string;   // Fill color for the wave
}

const WaveDivider: React.FC<WaveDividerProps> = ({ flip = false, fillColor = '#000' }) => (
  <div
    className={`relative w-full h-16 overflow-hidden bg-black ${flip ? 'rotate-180' : ''}`}
    /* 
      ^^^^^ 
      Ensures the background behind the wave is black 
    */
  >
    <svg
      className="absolute top-0 left-0 w-full h-full"
      fill={fillColor}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,138.7C672,171,768,213,864,229.3C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    </svg>
  </div>
);

export default WaveDivider;
