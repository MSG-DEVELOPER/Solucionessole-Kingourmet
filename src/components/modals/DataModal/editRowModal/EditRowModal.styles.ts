import styled from "styled-components";
import {
  ModalOverlay as BaseOverlay,
  ModalContainer as BaseContainer,
  ModalHeader as BaseHeader,
  ModalBody as BaseBody,
  ModalFooter as BaseFooter,
  CloseButton as BaseCloseButton,
} from "../DataModal.styles";

// Reutilizamos la base de estilos de los modales grandes,
// pero adaptamos tamaños para un modal de edición compacto.

export const EditModalOverlay = styled(BaseOverlay)``;

export const EditModalContainer = styled(BaseContainer)`
  max-width: 480px;
  width: 90%;
`;

export const EditModalHeader = styled(BaseHeader)`
  h2 {
    font-size: 1.1rem;
  }
`;

export const EditModalBody = styled(BaseBody)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export const EditModalFooter = styled(BaseFooter)`
  display: flex;
  justify-content: flex-end;
`;

export const EditCloseButton = styled(BaseCloseButton)`
  margin-left: auto;
  flex-shrink: 0;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-size: 0.95rem;
  font-family: cuerpo;
  transition: ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue100};
  }
`;

export const PrimaryButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background: ${({ theme }) => theme.colors.blue600};
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: cuerpo;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.light};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;


