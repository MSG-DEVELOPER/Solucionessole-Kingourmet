
import logoKG from "../../assets/icons/logoKG.svg";
import { SpinnerWrapper, SpinnerRing, SpinnerLogo } from "./Spinner.styles";

function Spinner() {
  return (
    <SpinnerWrapper aria-label="Cargando">
      <SpinnerRing />
      <SpinnerLogo src={logoKG} alt="Logo Kingourmet" />
    </SpinnerWrapper>
  );
}

export default Spinner;