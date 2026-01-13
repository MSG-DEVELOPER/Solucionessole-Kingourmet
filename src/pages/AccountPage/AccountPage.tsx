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

  const fullName = `${user.nombre}${user.apellidos ? ` ${user.apellidos}` : ""}`;

  const handleChangePassword = () => {
    alert("Función de cambio de contraseña en desarrollo");
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
                {formatDate(user.ultimo_acceso) || <EmptyValue>No disponible</EmptyValue>}
              </DateValue>
            </DateRow>
            <DateRow>
              <DateLabel>CUENTA CREADA:</DateLabel>
              <DateValue>
                {formatDate(user.created_at) || <EmptyValue>No disponible</EmptyValue>}
              </DateValue>
            </DateRow>
            <DateRow>
              <DateLabel>ÚLTIMA MOD:</DateLabel>
              <DateValue>
                {formatDate(user.updated_at) || <EmptyValue>No disponible</EmptyValue>}
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
    </AccountPageContainer>
  );
}

export default AccountPage;
