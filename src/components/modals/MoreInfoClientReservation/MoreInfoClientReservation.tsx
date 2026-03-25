import { User } from "lucide-react";
import type { Cliente } from "../../../services/clientes/getClientes";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  IconWrapper,
  ModalTitle,
  ModalContent,
  DetailList,
  DetailRow,
  DetailLabel,
  DetailValue,
  ModalMessage,
  ActionButton,
} from "./MoreInfoClientReservation.styles";

interface MoreInfoClientReservationProps {
  open: boolean;
  onClose: () => void;
  cliente: Cliente | null;
}

export default function MoreInfoClientReservation({
  open,
  onClose,
  cliente,
}: MoreInfoClientReservationProps) {
  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar modal">
          ×
        </CloseButton>

        <ModalHeader>
          <IconWrapper>
            <User aria-hidden />
          </IconWrapper>
          <ModalTitle>Datos del cliente</ModalTitle>
        </ModalHeader>

        <ModalContent>
          {cliente ? (
            <DetailList>
              <DetailRow>
                <DetailLabel>Nombre</DetailLabel>
                <DetailValue>{cliente.nombre}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Apellidos</DetailLabel>
                <DetailValue>{cliente.apellidos}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Email</DetailLabel>
                <DetailValue>{cliente.email}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Teléfono</DetailLabel>
                <DetailValue>{cliente.telefono}</DetailValue>
              </DetailRow>
            </DetailList>
          ) : (
            <ModalMessage>
              No hay datos del cliente en la lista cargada.
            </ModalMessage>
          )}
        </ModalContent>

        <ActionButton type="button" onClick={onClose}>
          Entendido
        </ActionButton>
      </ModalContainer>
    </ModalOverlay>
  );
}
