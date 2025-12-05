import { Container, InfoArea, Avatar } from "./UserBadge.styles";
import placeholderUser from "../../../assets/icons/placeholderUser.svg";

function UserBadge() {
  return (
    <Container>
      <InfoArea>
        {/* Aquí puedes poner el nombre, rol o dejarlo vacío */}
      </InfoArea>

      <Avatar
        src = {placeholderUser} 
        alt="User avatar"
      />
    </Container>
  );
}

export default UserBadge;
