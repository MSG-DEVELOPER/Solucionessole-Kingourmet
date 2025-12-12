import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BurguerMenuModal from "../modals/BurguerMenuModal/BurguerMenuModal";
import { Menu } from "lucide-react";
import { Container, HeaderContent, Title, BurgerButton } from "./BurguerMenu.styles";

function BurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cierra el modal cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Container>
      <HeaderContent>
        <Title>La Cuina de Marga</Title>
        <BurgerButton onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </BurgerButton>
      </HeaderContent>
      {isOpen && <BurguerMenuModal />}
    </Container>
  )
}

export default BurguerMenu