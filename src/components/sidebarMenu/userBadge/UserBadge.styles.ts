import styled from "styled-components";

// Contenedor general: forma de "misil"
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.gray100},
    ${({ theme }) => theme.colors.gray200}
  );
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.md};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md};
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: calc(${({ theme }) => theme.spacing.md} + 56px);
  box-shadow: ${({ theme }) => theme.shadows.light};
  overflow: hidden;
`;

// Parte rectangular izquierda
export const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray700};
  font-family: cuerpo;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

// Avatar como punta del misil
export const Avatar = styled.img`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  transform: scale(1.08); /* recorta bordes visibles sin reducir tamaño */
  border: 2px solid ${({ theme }) => theme.colors.surface};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.surface};
`;
