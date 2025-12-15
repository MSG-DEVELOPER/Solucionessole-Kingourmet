import { MenuContainer } from "./ActionsMenu.style";

export interface Action {
  label: string;
  onClick: (row: Record<string, unknown>) => void;
}

// Props del componente
interface ActionsMenuProps {
  actions: Action[];
  row: Record<string, unknown>;
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ actions, row }) => {
  // row fila clickada , array de acciones YA creadas para esa fila
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