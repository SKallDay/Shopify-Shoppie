import React from 'react';
import './banner.css';

export const Banner = ({
  nominations,
}) => {

  return (
   <div className="banner__container">
    <p>You've Selected {nominations.length} Nominations</p>
   </div>
  );
};

// export
export default Banner;

