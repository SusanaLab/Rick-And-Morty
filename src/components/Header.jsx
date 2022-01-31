import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext.js';
import { ButtonFavStyled } from '../styled/ButtonFavStyled.js';

const Header = () => {
    const [darkMode, setDarkMode]= useState(false);
    const color = useContext(ThemeContext);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="header">
      <div>
      <h1 style ={{ color }}>Rick and morty </h1>    
      </div>
      <ButtonFavStyled type ="button" onClick={handleClick}>{darkMode ? 'Rick': 'Morty'} </ButtonFavStyled>
   </div>
  );

}
export default Header;


