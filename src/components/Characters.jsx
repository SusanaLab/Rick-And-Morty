
import React, { useEffect, useState, useReducer, useMemo, useRef, useCallback } from 'react';
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

      .then(response => response.json())
      .then(data => setCharacters(data.results));

  }, []);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

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
          </DivStyled>
        </DivConatainer>

      ))}

    </ContainerStyled>
  </>
  );
}
export default Characters;