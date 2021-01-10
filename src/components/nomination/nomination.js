import React from 'react';
import './nomination.css';

// react component
export const Nominations = ({
  nominations,
  removeNominee
}) => {

  return (
   <div className="nomination__container">
    <p>Nominations</p>
    {nominations? 
      nominations.map((item) => (
        <>
        <p>{item.Title}</p>
        <button onClick={() => removeNominee(item)}>
          remove
        </button>
        </>
      ))
    :''}
   </div>
  );
};

// export
export default Nominations;

