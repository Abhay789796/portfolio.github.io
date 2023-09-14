import React from 'react';

const IconList = ({ icons }) => {
  return (
    <div className='flex gap-x-4'>
      {icons.map((icon, index) => (
        <div key={index} className='text-2xl text-white'>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default IconList;
