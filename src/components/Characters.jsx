
import React, { useEffect, useState, useReducer, useMemo, useRef, useCallback } from 'react';
//import { ButtonStyled } from '../styled/BottonStyled';
import { ContainerStyled } from '../styled/ContainerStyled';
import { DivStyled } from '../styled/DivStyled';
import Search from './Search';
import { ImageStyled } from '../styled/ImageStyled';
import { DivConatainer, H1Styled, H2Styled } from '../styled/DivContainer';
import { DivFavorite } from '../styled/DivFavoriteStyled';

const initialState = {
  favorites: []
}
const Characters = () => {
  const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      default:
        return state;
    }
  }

  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null)
  useEffect(() => {

    fetch('https://rickandmortyapi.com/api/character/?page=19')
      //una vez que se obtine la informacion la traemos a un objeto json y de ahi la podemos manipular 
      .then(response => response.json())
      .then(data => setCharacters(data.results));
    //useEfect llama a fetch y ella trae la info y la transforma en json se la pasa a nuestro hook de estado y la almasena en nuestros characteres
  }, []);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    
  }
  //obtenemos el valor de un input
  // const handleSearch=() => {
  // setSearch(searchInput.current.value);
  // }  
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])
  //filtramos los nombres garactizando que esten en minusculas
  /*   const filteredUsers = characters.filter((user)=>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    }) */



  const filteredUsers = useMemo(() =>
    characters.filter((user) => {

      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

  return (<>  <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
  <h1 style={{ color: '#41D2FF' }}>Favorite Characters</h1>

    <ContainerStyled>
      {favorites.favorites.map(favorite => (
        <DivConatainer color="#FFFFFF" key="{favorite.id}" >
        
          <ImageStyled src={favorite.image} alt={favorite.name} />
          <DivFavorite>
            <H1Styled>  {favorite.name}  </H1Styled>
            <H2Styled>  {favorite.status}  </H2Styled>
            <H2Styled>  {favorite.gender}  </H2Styled>
            <H2Styled>  {favorite.species}  </H2Styled>
          </DivFavorite>
        </DivConatainer>
      ))}
    </ContainerStyled>
    <ContainerStyled className="Characters">

      {filteredUsers.map(character => (
        <DivConatainer className="item" key={character.id}>
  
          <ImageStyled src={character.image} alt={character.name} />
          <DivStyled>
            <H1Styled>  {character.name}  </H1Styled>
            <H2Styled>  {character.status}  </H2Styled>
            <H2Styled>  {character.gender}  </H2Styled>
            <H2Styled>  {character.species}  </H2Styled>
                    <i type="button" onClick={() => handleClick(character)} class="fas fa-heart" ></i>
       {/*      <ButtonFavStyled type="button" onClick={() => handleClick(character)}> Favorite </ButtonFavStyled> */}
          </DivStyled>
        </DivConatainer>

      ))}

    </ContainerStyled>
  </>
  );
}
export default Characters;