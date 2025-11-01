import React from 'react';

interface FloatingNumberProps {
  value: string;
  x: number;
  y: number;
}

const FloatingNumber: React.FC<FloatingNumberProps> = ({ value, x, y }) => {
  return (
    <div
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
      className="absolute text-3xl font-bold text-amber-300 pointer-events-none animate-float-up drop-shadow-lg z-50"
    >
      {value}
    </div>
  );
};

export default FloatingNumber;
