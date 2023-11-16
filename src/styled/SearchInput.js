import styled from "styled-components";
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  margin-left:20%;
  color:#132A3C;
    background-color:  #3A5520;
`;

export const SearchInput = styled.input`
color:#ffffff;
  padding: 10px; /* Puedes ajustar el relleno según tus preferencias */
  font-size: 16px; /* Puedes ajustar el tamaño de fuente según tus preferencias */
  border: 2px solid #09f; /* Puedes ajustar el color del borde según tus preferencias */
  border-radius: 5px; /* Puedes ajustar el radio del borde según tus preferencias */
margin-top:-160px;
z-index: 2;
  background-color: #41D2FF;
    ::placeholder {
    color: #132A3C;
  }
  &:focus {
    outline: none;
    border-color: #01373c; /* Puedes ajustar el color del borde al enfocar según tus preferencias */
  }
`;