import React from 'react';
import './GroupDescription.css';

const GroupDescription = ({ meals, index, i }) => {

  const timeConverter = (mealDate) => {
    if(mealDate) {
      const date = mealDate.toString();
      const month = date.slice(5, 7);
      const year = date.slice(0, 4);
      const day = date.slice(8, 10);
      const newDate = month + '/' + day + '/' + year;
      return newDate;
    } else {
      return "NA";
    }
  };
  return (
    <div className='collection group-description'>

        Day: <b> {timeConverter(Object.keys(meals[index])[i])}</b>
  
    </div>
  );
};

export default GroupDescription;
