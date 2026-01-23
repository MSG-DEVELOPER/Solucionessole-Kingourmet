import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeftRight } from "lucide-react";
import DailyReservations from "../../components/restaurantPageComponents/dailyReservations/DailyReservations";
import RestaurantLayout from "../../components/restaurantPageComponents/restaurantLayout/RestaurantLayout";
import { getConfig } from "../../services/config/getConfig";
import { getEstablishment } from "../../services/establishment/getEstablishment";
import { getFestivos } from "../../services/festivos/getFestivos";
import { getAlergenos } from "../../services/alergenos/getAlergenos";
import type { RootState } from "../../redux/store";
import { setConfig } from "../../redux/slices/config/configSlice";
import { setEstablishment } from "../../redux/slices/establishment/establishmentSlice";
import { setFestivos } from "../../redux/slices/festive/festiveSlice";
import { setAlergenos } from "../../redux/slices/alergenos/alergenosSlice";

import {
  RestaurantPageContainer,
  DesktopContainer,
  LeftSection,
  RightSection,
  MobileContainer,
  MobileSwitchWrapper,
  SwitchButton,
  MobileContent,
} from "./RestaurantPage.styles";

function RestaurantPage() {
  const dispatch = useDispatch();
  const [showLayout, setShowLayout] = useState(true);
  const establecimientoId = useSelector(
    (state: RootState) => state.auth.establecimientoId
  );
  const config = useSelector((state: RootState) => state.config.data);
  const establishment = useSelector((state: RootState) => state.establishment.data);
  const festivos = useSelector((state: RootState) => state.festive.data);
  const alergenos = useSelector((state: RootState) => state.alergenos.data);

  // 🔍 Console log provisional para verificar estado de Redux
  useEffect(() => {
    console.log("📦 Estado actual de Redux:");
    console.log("  - Config:", config);
    console.log("  - Establishment:", establishment);
    console.log("  - Festivos:", festivos);
    console.log("  - Alérgenos:", alergenos);
  }, [config, establishment, festivos, alergenos]);

  useEffect(() => {
    if (config || !establecimientoId) return;

    const token = sessionStorage.getItem("token");
    if (!token) return;

    console.log("🚀 Iniciando carga de datos - establecimientoId:", establecimientoId);

    async function loadConfig() {
      try {
        console.log("📡 GET Config - Iniciando...");
        const res = await getConfig(token as string, establecimientoId);
        console.log("📡 GET Config - Respuesta completa:", res);
        if (res.data) {
          dispatch(setConfig(res.data));
          console.log("✅ Config guardado en Redux:", res.data);
        } else {
          console.warn("⚠️ GET Config - No hay data en la respuesta");
        }
        console.log(res.message);
      } catch (error) {
        console.error("❌ GET Config - Error:", error);
      }
    }

    async function loadEstablishment() {
      try {
        console.log("📡 GET Establishment - Iniciando...");
        const data = await getEstablishment(
          token as string,
          establecimientoId
        );
        console.log("📡 GET Establishment - Respuesta completa:", data);
    
        if (data) {
          dispatch(setEstablishment(data));
          console.log("✅ Establishment guardado en Redux:", data);
        } else {
          console.warn("⚠️ GET Establishment - No hay data en la respuesta");
        }
    
       
      } catch (error) {
        console.error("❌ GET Establishment - Error:", error);
      }
    }

    async function loadFestivos() {
      try {
        console.log("📡 GET Festivos - Iniciando...");
        const festivos = await getFestivos(
          token as string,
          establecimientoId
        );
        console.log("📡 GET Festivos - Respuesta completa:", festivos);
    
        if (festivos) {
          dispatch(setFestivos(festivos));
          console.log("✅ Festivos guardado en Redux:", festivos);
        } else {
          console.warn("⚠️ GET Festivos - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Festivos - Error:", error);
      }
    }

    async function loadAlergenos() {
      try {
        console.log("📡 GET Alérgenos - Iniciando...");
        const alergenos = await getAlergenos(token as string);
        console.log("📡 GET Alérgenos - Respuesta completa:", alergenos);
    
        if (alergenos) {
          dispatch(setAlergenos(alergenos));
          console.log("✅ Alérgenos guardado en Redux:", alergenos);
        } else {
          console.warn("⚠️ GET Alérgenos - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Alérgenos - Error:", error);
      }
    }
    

    loadConfig();
    loadEstablishment();
    loadFestivos();
    loadAlergenos();
  }, [dispatch, config, establecimientoId]);

  return (
    <RestaurantPageContainer>
      <DesktopContainer>
        <LeftSection>
          <RestaurantLayout />
        </LeftSection>

        <RightSection>
          <DailyReservations />
        </RightSection>
      </DesktopContainer>

      <MobileContainer>
        <MobileSwitchWrapper>
          <SwitchButton
            onClick={() => setShowLayout((prev) => !prev)}
            aria-label="Cambiar vista"
            title="Cambiar vista"
          >
            <ArrowLeftRight size={20} />
          </SwitchButton>
        </MobileSwitchWrapper>

        <MobileContent>
          {showLayout ? <RestaurantLayout /> : <DailyReservations />}
        </MobileContent>
      </MobileContainer>
    </RestaurantPageContainer>
  );
}

export default RestaurantPage;
