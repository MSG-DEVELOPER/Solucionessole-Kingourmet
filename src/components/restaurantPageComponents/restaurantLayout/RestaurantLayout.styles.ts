import styled from 'styled-components';

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const CanvasElement = styled.canvas`
  flex: 1;
  width: 100%;
  height: 100%;
  cursor: crosshair;
  touch-action: none;
`;

