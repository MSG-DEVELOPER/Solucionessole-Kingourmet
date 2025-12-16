// EditRowModal.tsx
//modal de edición de fila,este se puede reutilizar para cualquier tabla que SOLO tenga la accion editar
//en el futuro quizas haya que hacer un modal con acciones diferentes , por ejemplo, editar y eliminar
import React, { useState } from "react";
import {
  EditModalOverlay,
  EditModalContainer,
  EditModalHeader,
  EditModalBody,
  EditModalFooter,
  EditCloseButton,
  TextInput,
  PrimaryButton,
} from "./EditRowModal.styles";
import { LucideX } from "lucide-react";

interface EditRowModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: { Parámetro: string; Valor: unknown; _key?: string } | null;
  onSave?: (key: string, newValue: string) => void; // futura función PUT + redux
}

const EditRowModal: React.FC<EditRowModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [value, setValue] = useState<string>(
    row ? String(row.Valor ?? "") : ""
  );

  if (!isOpen || !row) return null;

  function handleSave() {
    if (!row) return;

    if (row._key && onSave) {
      onSave(row._key, value);
    }
   
    onClose();
  }

  return (
    <EditModalOverlay>
      <EditModalContainer>
        <EditModalHeader>
          <h2>Editar campo</h2>
          <EditCloseButton onClick={onClose}>
            <LucideX size={20} />
          </EditCloseButton>
        </EditModalHeader>

        <EditModalBody>
          <label>{row.Parámetro}</label>
          <TextInput
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </EditModalBody>

        <EditModalFooter>
          <PrimaryButton onClick={handleSave}>Guardar</PrimaryButton>
        </EditModalFooter>
      </EditModalContainer>
    </EditModalOverlay>
  );
};

export default EditRowModal;
