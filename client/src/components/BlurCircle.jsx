import React from 'react';

const BlurCircle = ({ top, left, right, bottom }) => {
  const style = {
    top,
    left,
    right,
    bottom,
  };

  return (
    <div
      className='absolute w-96 h-96 bg-purple-500 -z-0 blur-3xl rounded-full opacity-30'
      style={style}
    ></div>
  );
};

export default BlurCircle;
