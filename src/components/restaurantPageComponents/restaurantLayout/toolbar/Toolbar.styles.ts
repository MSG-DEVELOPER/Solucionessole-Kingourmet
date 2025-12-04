import styled from 'styled-components';

export const ToolbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0.75rem;
    gap: 0.4rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
    gap: 0.25rem;
  }
`;

export const ToolbarButton = styled.button`
  padding: 0.5rem 1rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
  font-family: cuerpo;

  @media (max-width: 1024px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: #357abd;
  }

  &:active {
    background: #2563a0;
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ColorPickerLabel = styled.label`
  font-size: 0.9rem;
  color: #333;
  font-family: cuerpo;
`;
