import { ToolbarContainer, ToolbarButton, ColorPickerContainer, ColorPickerLabel } from './Toolbar.styles';

interface ToolbarProps {
  currentColor: string;
  onColorChange: (color: string) => void;
  onAddCircle: () => void;
  onAddSquare: () => void;
  onAddEllipse: () => void;
  onAddWall: () => void;
  onAddDoor: () => void;
  onAddWindow: () => void;
  onAddBathroom: () => void;
  onAddPlant: () => void;
  onDeleteSelected: () => void;
  onClearCanvas: () => void;
  onToggleGrid: () => void;
  onSaveJson: () => void;
  onLoadJson: () => void;
  showGrid: boolean;
}

function Toolbar({
  currentColor,
  onColorChange,
  onAddCircle,
  onAddSquare,
  onAddEllipse,
  onAddWall,
  onAddDoor,
  onAddWindow,
  onAddBathroom,
  onAddPlant,
  onDeleteSelected,
  onClearCanvas,
  onToggleGrid,
  onSaveJson,
  onLoadJson,
  showGrid,
}: ToolbarProps) {
  return (
    <ToolbarContainer>
      <ColorPickerContainer>
        <ColorPickerLabel>Color:</ColorPickerLabel>
        <input
          type="color"
          id="colorPicker"
          value={currentColor}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </ColorPickerContainer>

      <ToolbarButton onClick={onAddCircle}>Círculo</ToolbarButton>
      <ToolbarButton onClick={onAddSquare}>Cuadrado</ToolbarButton>
      <ToolbarButton onClick={onAddEllipse}>Elipse</ToolbarButton>
      <ToolbarButton onClick={onAddWall}>Pared</ToolbarButton>
      <ToolbarButton onClick={onAddDoor}>Puerta</ToolbarButton>
      <ToolbarButton onClick={onAddWindow}>Ventana</ToolbarButton>
      <ToolbarButton onClick={onAddBathroom}>Baño</ToolbarButton>
      <ToolbarButton onClick={onAddPlant}>Planta</ToolbarButton>
      <ToolbarButton onClick={onDeleteSelected}>Eliminar</ToolbarButton>
      <ToolbarButton onClick={onClearCanvas}>Limpiar</ToolbarButton>
      <ToolbarButton onClick={onToggleGrid}>
        {showGrid ? 'Ocultar' : 'Mostrar'} Cuadrícula
      </ToolbarButton>
      <ToolbarButton onClick={onSaveJson}>Guardar JSON</ToolbarButton>
      <ToolbarButton onClick={onLoadJson}>Cargar JSON</ToolbarButton>
    </ToolbarContainer>
  );
}

export default Toolbar;
