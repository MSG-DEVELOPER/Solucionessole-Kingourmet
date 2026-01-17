import { AlertTriangle } from "lucide-react";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalMessage,
  ActionButton,
  IconWrapper,
} from "./DeniedModalMiddleware.styles";

interface PermissionDeniedModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PermissionDeniedModal({
  open,
  onClose,
}: PermissionDeniedModalProps) {
  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar modal">
          ×
        </CloseButton>

        <ModalHeader>
          <IconWrapper>
            <AlertTriangle />
          </IconWrapper>
          <ModalTitle>Permisos insuficientes</ModalTitle>
        </ModalHeader>

        <ModalContent>
          <ModalMessage>
            No tienes permisos suficientes para realizar esta acción. Por favor,
            contacta con un administrador si necesitas acceso a esta
            funcionalidad.
          </ModalMessage>
        </ModalContent>

        <ActionButton onClick={onClose}>Entendido</ActionButton>
      </ModalContainer>
    </ModalOverlay>
  );
}
