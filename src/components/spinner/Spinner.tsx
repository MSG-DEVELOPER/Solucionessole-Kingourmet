
import KingourmetLogo from "../../assets/icons/Kingourmet_no_bg.svg";
import { SpinnerWrapper, SpinnerRing, SpinnerLogo } from "./Spinner.styles";

function Spinner() {
  return (
    <SpinnerWrapper aria-label="Cargando">
      <SpinnerRing />
      <SpinnerLogo src={KingourmetLogo} alt="Logo Kingourmet" />
    </SpinnerWrapper>
  );
}

export default Spinner;