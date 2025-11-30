import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray100};
  box-shadow: ${(props) => props.theme.shadows.light};
  padding: ${(props) => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const SidebarItem = styled.li`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray700};
    font-weight: 500;
    padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    display: block;
    border-radius: ${(props) => props.theme.borderRadius.md};
    transition: ${(props) => props.theme.transitions.fast};

    &:hover {
      background-color: ${(props) => props.theme.colors.blue100};
      color: ${(props) => props.theme.colors.blue700};
    }

    &.active {
      background-color: ${(props) => props.theme.colors.blue200};
      color: ${(props) => props.theme.colors.blue900};
      font-weight: 600;
    }
  }
`;
