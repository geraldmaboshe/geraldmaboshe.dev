import React from 'react';
import './index.scss';

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
    <div className="footer-container">
      <p>Happy {weekDays[date.getDay()]}!</p>
      <p>&copy; {date.getFullYear()}. Gerald Maboshe</p>
    </div>
  );
}

export default Footer;
