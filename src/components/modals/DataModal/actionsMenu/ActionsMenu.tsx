import { MenuContainer } from "./ActionsMenu.style";

export interface Action {
    label: string;
    onClick: (row: any) => void;
  }
  
  // Props del componente
  interface ActionsMenuProps {
    actions: Action[];
    row: any;
  }
  
  const ActionsMenu: React.FC<ActionsMenuProps> = ({ actions, row }) => {
    return (
      <MenuContainer>
        {actions.map((action, idx) => (
          <button key={idx} onClick={() => action.onClick(row)}>
            {action.label}
          </button>
        ))}
      </MenuContainer>
    );
  };
  
  export default ActionsMenu;