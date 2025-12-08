import { Container, InfoArea, Avatar } from "./UserBadge.styles";
import placeholderUser from "../../../assets/icons/placeholderUser.svg";
import { useNavigate } from "react-router-dom";

function UserBadge() {
  const navigate = useNavigate();

  return (
    <Container>
      <InfoArea>
        {/* Aquí puedes poner el nombre, rol o dejarlo vacío */}
        <p>Marga Admin</p>
      </InfoArea>

      <Avatar
        src = {placeholderUser} 
        alt="User avatar"
        onClick={()=>navigate("/lobby/account")}
      />
    </Container>
  );
}

export default UserBadge;
