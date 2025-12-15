// EditRowModal.tsx
import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from "../DataModal.styles";
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
    alert(`Guardar: ${row._key} → ${value}`); // por ahora solo alert
    onClose();
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Editar {row.Parámetro}</h2>
          <CloseButton onClick={onClose}>
            <LucideX size={20} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <label>{row.Parámetro}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "8px" }}
          />
        </ModalBody>

        <ModalFooter>
          <button onClick={handleSave} style={{ padding: "8px 12px" }}>
            Guardar
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditRowModal;
