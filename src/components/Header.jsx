import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext.js';
import backgroundImage from '../Assets/header.jpg';
const Header = () => {

const headerStyle = {
  display: 'flex',
  width: '100%',
  height: '300px',
  position: 'relative', 
};

const imgStyle = {
  width: '100%',
  height: '100%',
/*   objectFit: 'cover',
  position: 'absolute',  */
  top: 0,
  left: 0,
};


  return (
    <div className="header"  style={headerStyle}>
    <img src={backgroundImage} alt="Background" style={imgStyle} />
     
   </div>
  );

}
export default Header;


