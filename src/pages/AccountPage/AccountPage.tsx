import { useState } from "react";
import { middleware } from "../../middleware/middleware";
import PermissionDeniedModal from "../../middleware/DeniedModalMiddleware";
import { useSelector } from "react-redux";
import { Mail, Phone, Lock } from "lucide-react";
import type { RootState } from "../../redux/store";
import bbIcon from "../../assets/icons/bb.svg";
import {
  AccountPageContainer,
  AccountCard,
  ProfileHeader,
  ProfileImage,
  ProfileName,
  FullName,
  UserRole,
  ContactRow,
  ContactInfo,
  ContactIcon,
  DatesTable,
  DateRow,
  DateLabel,
  DateValue,
  InfoSection,
  InfoLabel,
  InfoValue,
  NotesSection,
  NotesTextarea,
  ActionsSection,
  EditButton,
  EmptyValue,
} from "./AccountPage.styles";

function AccountPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [showModal, setShowModal] = useState(false);

  if (!user) {
    return (
      <AccountPageContainer>
        <AccountCard>
          <InfoValue>No hay información de usuario disponible</InfoValue>
        </AccountCard>
      </AccountPageContainer>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const fullName = `${user.nombre}${
    user.apellidos ? ` ${user.apellidos}` : ""
  }`;

  const openDeniedModal = () => {
    setShowModal(true);
  };

  const handleChangePassword = async () => {
    const method = "PUT"; 
    const allowed = await middleware(1, method, openDeniedModal); 
        //el id recurso deberia piyarlo de la url de la api dentro del mismo middel, es decir no se enviaria

    if (allowed) alert("Función de cambio de contraseña en desarrollo");
     //if allowed , llamar al service PUT changepassword y enviar el method por argumento , tipo putPasssword(method)

    if (!allowed) return;
  };

  return (
    <AccountPageContainer>
      <AccountCard>
        <ProfileHeader>
          <ProfileImage src={bbIcon} alt="Foto de perfil" />
          <ProfileName>
            <FullName>{fullName}</FullName>
            <UserRole>{user.rol_nombre}</UserRole>
          </ProfileName>
        </ProfileHeader>

        <InfoSection>
          <ContactRow>
            <ContactInfo>
              <ContactIcon>
                <Mail size={16} />
              </ContactIcon>
              <span>{user.email}</span>
            </ContactInfo>

            <ContactInfo>
              <ContactIcon>
                <Phone size={16} />
              </ContactIcon>
              <span>
                {user.telefono ? (
                  user.telefono
                ) : (
                  <EmptyValue>No proporcionado</EmptyValue>
                )}
              </span>
            </ContactInfo>
          </ContactRow>

          <DatesTable>
            <DateRow $highlight>
              <DateLabel>ÚLTIMO ACCESO:</DateLabel>
              <DateValue>
                {formatDate(user.ultimo_acceso) || (
                  <EmptyValue>No disponible</EmptyValue>
                )}
              </DateValue>
            </DateRow>
            <DateRow>
              <DateLabel>CUENTA CREADA:</DateLabel>
              <DateValue>
                {formatDate(user.created_at) || (
                  <EmptyValue>No disponible</EmptyValue>
                )}
              </DateValue>
            </DateRow>
            <DateRow>
              <DateLabel>ÚLTIMA MOD:</DateLabel>
              <DateValue>
                {formatDate(user.updated_at) || (
                  <EmptyValue>No disponible</EmptyValue>
                )}
              </DateValue>
            </DateRow>
          </DatesTable>
        </InfoSection>

        <NotesSection>
          <InfoLabel>Notas</InfoLabel>
          <NotesTextarea
            value={user.notas || ""}
            placeholder="No hay notas guardadas..."
            readOnly
          />
        </NotesSection>

        <ActionsSection>
          <EditButton onClick={handleChangePassword}>
            <Lock size={18} />
            Cambiar contraseña
          </EditButton>
        </ActionsSection>
      </AccountCard>

      <PermissionDeniedModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </AccountPageContainer>
  );
}

export default AccountPage;
