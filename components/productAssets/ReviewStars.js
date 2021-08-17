import React from 'react';

export default function ReviewStars({ count }) {
  return (
    <div className="d-flex">
      <div className="d-flex position-relative">
    
        <div
          className="d-flex position-absolute left-0 top-0 right-0 bottom-0 overflow-hidden"
          style={{ flexWrap: 'nowrap', width: `${count * 20}%` }}
        >
         
        </div>
      </div>
     
    </div>
  );
}
