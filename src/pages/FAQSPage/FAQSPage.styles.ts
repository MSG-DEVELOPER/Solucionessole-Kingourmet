import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: titulo;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue600};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-family: cuerpo;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    position: absolute;
    left: ${({ theme }) => theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray500};
    pointer-events: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  input:focus + svg {
    color: ${({ theme }) => theme.colors.blue500};
  }

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const Search = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm} 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-family: cuerpo;
  font-size: 0.95rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 2.25rem;
  }
`;
