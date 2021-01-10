import React from 'react';
import './nomination.css';

// react component
export const Nominations = ({
  nominations,
  removeNominee
}) => {

  return (
   <div className="nomination__container">
    <h3 className="nomination__heading">Nominations</h3>
    {nominations? 
      nominations.map((item) => (
        <div className="nomination__card">
        <h5 className="nomination__text">{item.Title}</h5>
        <button class="button"onClick={() => removeNominee(item)}>
          Remove
        </button>
        </div>
      ))
    :''}
   </div>
  );
};

// export
export default Nominations;

