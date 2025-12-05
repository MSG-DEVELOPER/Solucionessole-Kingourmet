import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 64px; /* Empieza debajo de la navbar (padding sm + botón 44px + padding sm ≈ 64px) */
  left: 0;
  width: 100vw; /* Ocupa todo el ancho */
  height: calc(100vh - 64px); /* Altura total menos altura de navbar */
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 999; /* Por encima del contenido pero la navbar (z-index: 100) queda visible */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden; /* Permite scroll si el contenido es largo */
  overflow-x: hidden;
`;
