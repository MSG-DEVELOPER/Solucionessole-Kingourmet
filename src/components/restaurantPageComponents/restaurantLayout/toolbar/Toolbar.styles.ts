import styled from 'styled-components';

export const ToolbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  align-items: center;
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
`;
