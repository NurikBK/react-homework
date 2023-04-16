import React from 'react';
import Photos from './Photos';

const Page = ({ first10Img }) => {
  return (
    <div className="flexWrap">
      {first10Img.map((item) => (
        <Photos key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
