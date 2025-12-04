import { Menu } from "lucide-react";
import { Container, HeaderContent, Title, BurgerButton } from "./BurguerMenu.styles";

function BurguerMenu() {
  return (
    <Container>
      <HeaderContent>
        <Title>La Cuina de Marga</Title>
        <BurgerButton onClick={() => alert("Menu")}>
          <Menu />
        </BurgerButton>
      </HeaderContent>
    </Container>
  )
}

export default BurguerMenu