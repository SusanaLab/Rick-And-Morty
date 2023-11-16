import styled from "styled-components";
import fondo from "../Assets/fondo.jpg";

export const ContainerStyled = styled.div`
  background: url(${fondo});
  background-size: cover; /* Ajusta el tamaño de la imagen para cubrir todo el espacio */
  background-repeat: no-repeat;
  with:100%; /* Evita que la imagen se repita */
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;
  cursor: pointer;
  font-size: 1em; /* Corregido el error tipográfico: fint-size a font-size */
padding:20px;
`;
