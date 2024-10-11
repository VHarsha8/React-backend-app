import React, { useRef } from 'react';

const TiltCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const maxTilt = 25;

    const tiltX = (maxTilt * y) / (height / 2);
    const tiltY = -(maxTilt * x) / (width / 2);

    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="w-80 h-64 border backdrop-filter backdrop-blur-xl  border-gray-700  rounded-lg shadow-lg transition-transform duration-300 ease-out hover:shadow-xl"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-xl font-semibold">Tilt Card</h2>
        <p className="text-gray-600">Hover over me for a 3D effect!</p>
      </div>
    </div>
  );
};

export default TiltCard;
