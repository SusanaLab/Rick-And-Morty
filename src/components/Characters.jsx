
import React, {useEffect, useState, useReducer, useMemo, useRef} from 'react';    
//import { ButtonStyled } from '../styled/BottonStyled';
import { ContainerStyled } from '../styled/ContainerStyled';
import { DivStyled } from '../styled/DivStyled';
import { NameStyled } from '../styled/NameStyled';
import { GenderStyled } from '../styled/GenderStyled';
import { ButtonFavStyled } from '../styled/ButtonFavStyled';

const initialState = {
  favorites:[]
}
const Characters = () => {
  const favoriteReducer =(state, action) => { 
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
 
const [characters, setCharacters]= useState([]);
const [favorites, dispatch]= useReducer(favoriteReducer, initialState);
const [search, setSearch]= useState('');
const searchInput = useRef(null)
    useEffect(()=> {
   
     fetch('https://rickandmortyapi.com/api/character/?page=19') 
     //una vez que se obtine la informacion la traemos a un objeto json y de ahi la podemos manipular 
     .then(response => response.json())
     .then(data=> setCharacters(data.results));
     //useEfect llama a fetch y ella trae la info y la transforma en json se la pasa a nuestro hook de estado y la almasena en nuestros characteres
      }, []);
      
      const handleClick = favorite => {
        dispatch ({type: 'ADD_TO_FAVORITE', payload: favorite })
      }
    //obtenemos el valor de un input
      const handleSearch=() => {
      setSearch(searchInput.current.value);
      }
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

      return (   
    <ContainerStyled className="Characters">

{favorites.favorites.map(favorite=>(
<li color= "#FFFFFF" key ="{favorite.id}">
  <DivStyled> {favorite.name}</DivStyled>
 
</li>

))}
<div className="Search">
  <input placeHolder ="Type to search ..." type="text" className="text" value={search} ref={searchInput} onChange={handleSearch}/>
</div>
     {filteredUsers.map(character=> ( 

     <div className="item" key ={character.id}>
       <DivStyled>
       <NameStyled>  {character.name}  </NameStyled>  
       <GenderStyled>  {character.status}  </GenderStyled>
       <GenderStyled>  {character.gender}  </GenderStyled>
       
      <ButtonFavStyled type="button" onClick={()=> handleClick(character)}> Favorite </ButtonFavStyled> 
       </DivStyled>
       </div>
     
    ))} 
      
 </ContainerStyled>
  );
}
export default Characters;

