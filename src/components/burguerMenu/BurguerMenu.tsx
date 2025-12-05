import { useState } from "react";
import BurguerMenuModal from "../modals/BurguerMenuModal/BurguerMenuModal";
import { Menu } from "lucide-react";
import { Container, HeaderContent, Title, BurgerButton } from "./BurguerMenu.styles";

function BurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

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