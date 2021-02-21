import React from 'react';

function Footer() {
  const date = new Date();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return (
    <div>
      <div className="footer">
        <br></br>
        <p>Happy {weekDays[date.getDay()]}</p>
        <p>&copy; {date.getFullYear()}. Gerald Maboshe</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
