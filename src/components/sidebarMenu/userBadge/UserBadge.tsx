import { Container, InfoArea, Avatar, Role } from "./UserBadge.styles";
import bbSvg from "../../../assets/icons/bb.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";


function UserBadge() {
  const navigate = useNavigate();
  const  user  = useSelector((state: RootState) => state.auth.user);
  return (
    <Container>
      <InfoArea>
        {/* Aquí puedes poner el nombre, rol o dejarlo vacío */}
        <p>
          {user ? (
            <>
              {user.nombre}{" "}
              {user.rol_nombre && <Role>{user.rol_nombre}</Role>}
            </>
          ) : (
            "Cargando..."
          )}
        </p>
      </InfoArea>

      <Avatar
        src = {bbSvg} 
        alt="User avatar"
        onClick={()=>navigate("/lobby/account")}
      />
    </Container>
  );
}

export default UserBadge;
