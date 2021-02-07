import React from 'react';
import './nomination.css';

export const Nominations = ({
  nominations,
  removeNominee,
}) => {

  return (
   <div className="nomination__container">
    <h3 className="nomination__heading">Nominations</h3>
    {nominations &&
      nominations.map((item, index) => (
        <div className="nomination__card" key={index}>
        <h5 className="nomination__text">{item.Title}</h5>
        <button className="button" onClick={() => removeNominee(item)}>
          Remove
        </button>
        </div>
      ))}
   </div>
  );
};

// export
export default Nominations;

