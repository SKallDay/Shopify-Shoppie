import React from 'react';

// react component
export const Nominations = ({
  nominations,
  removeNominee
}) => {

  return (
   <>
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
   </>
  );
};

// export
export default Nominations;

