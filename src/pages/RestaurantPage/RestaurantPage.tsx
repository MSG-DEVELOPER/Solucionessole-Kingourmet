import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeftRight } from "lucide-react";
import DailyReservations from "../../components/restaurantPageComponents/dailyReservations/DailyReservations";
import RestaurantLayout from "../../components/restaurantPageComponents/restaurantLayout/RestaurantLayout";
import { getConfig } from "../../services/config/getConfig";
import { getEstablishment } from "../../services/establishment/getEstablishment";
import { getFestivos } from "../../services/festivos/getFestivos";
import { getAlergenos } from "../../services/alergenos/getAlergenos";
import { getClientes } from "../../services/clientes/getClientes";
import { getHorarios } from "../../services/horarios/getHorarios";
import { getMesas } from "../../services/mesas/getMesas";
import { getSalas } from "../../services/salas/getSalas";
import { getPlantilla } from "../../services/plantilla/getPlantilla";
import type { RootState } from "../../redux/store";
import { setConfig } from "../../redux/slices/config/configSlice";
import { setEstablishment } from "../../redux/slices/establishment/establishmentSlice";
import { setFestivos } from "../../redux/slices/festive/festiveSlice";
import { setAlergenos } from "../../redux/slices/alergenos/alergenosSlice";
import { setClientes } from "../../redux/slices/clientes/clientesSlice";
import { setHorarios } from "../../redux/slices/horarios/horariosSlice";
import { setMesas } from "../../redux/slices/mesas/mesasSlice";
import { setSalas } from "../../redux/slices/salas/salasSlice";
import { setPlantilla } from "../../redux/slices/plantilla/plantillaSlice";

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
  const clientes = useSelector((state: RootState) => state.clientes.data);
  const horarios = useSelector((state: RootState) => state.horarios.data);
  const mesas = useSelector((state: RootState) => state.mesas.data);
  const salas = useSelector((state: RootState) => state.salas.data);
  const plantilla = useSelector((state: RootState) => state.plantilla.data);

  // 🔍 Console log provisional para verificar estado de Redux
  useEffect(() => {
    console.log("📦 Estado actual de Redux:");
    console.log("  - Config:", config);
    console.log("  - Establishment:", establishment);
    console.log("  - Festivos:", festivos);
    console.log("  - Alérgenos:", alergenos);
    console.log("  - Clientes:", clientes);
    console.log("  - Horarios:", horarios);
    console.log("  - Mesas:", mesas);
    console.log("  - Salas:", salas);
    console.log("  - Plantilla:", plantilla);
  }, [config, establishment, festivos, alergenos, clientes, horarios, mesas, salas]);

  useEffect(() => {
    if (config || !establecimientoId) return;

    const token = sessionStorage.getItem("token");
    if (!token) return;

    console.log("🚀 Iniciando carga de datos - establecimientoId:", establecimientoId);

    async function loadConfig() {
      try {
        console.log("📡 GET Config - Iniciando...");
        const res = await getConfig(token as string);
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
        const festivos = await getFestivos(token as string);
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

    async function loadClientes() {
      try {
        console.log("📡 GET Clientes - Iniciando...");
        const clientes = await getClientes(token as string);
        console.log("📡 GET Clientes - Respuesta completa:", clientes);
    
        if (clientes) {
          dispatch(setClientes(clientes));
          console.log("✅ Clientes guardado en Redux:", clientes);
        } else {
          console.warn("⚠️ GET Clientes - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Clientes - Error:", error);
      }
    }

    async function loadHorarios() {
      try {
        console.log("📡 GET Horarios - Iniciando...");
        const horarios = await getHorarios(token as string);
        console.log("📡 GET Horarios - Respuesta completa:", horarios);
    
        if (horarios) {
          dispatch(setHorarios(horarios));
          console.log("✅ Horarios guardado en Redux:", horarios);
        } else {
          console.warn("⚠️ GET Horarios - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Horarios - Error:", error);
      }
    }

    async function loadMesas() {
      try {
        console.log("📡 GET Mesas - Iniciando...");
        const mesas = await getMesas(token as string);
        console.log("📡 GET Mesas - Respuesta completa:", mesas);
    
        if (mesas) {
          dispatch(setMesas(mesas));
          console.log("✅ Mesas guardadas en Redux:", mesas);
        } else {
          console.warn("⚠️ GET Mesas - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Mesas - Error:", error);
      }
    }

    async function loadSalas() {
      try {
        console.log("📡 GET Salas - Iniciando...");
        const salas = await getSalas(token as string);
        console.log("📡 GET Salas - Respuesta completa:", salas);
    
        if (salas) {
          dispatch(setSalas(salas));
          console.log("✅ Salas guardadas en Redux:", salas);
        } else {
          console.warn("⚠️ GET Salas - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Salas - Error:", error);
      }
    }

    async function loadPlantilla() {
      try {
        console.log("📡 GET Plantilla - Iniciando...");
        const usuarios = await getPlantilla(token as string);
        console.log("📡 GET Plantilla - Respuesta completa:", usuarios);
        if (usuarios) {
          dispatch(setPlantilla(usuarios));
          console.log("✅ Plantilla guardada en Redux:", usuarios);
        } else {
          console.warn("⚠️ GET Plantilla - No hay data en la respuesta");
        }
      } catch (error) {
        console.error("❌ GET Plantilla - Error:", error);
      }
    }

    loadConfig();
    loadEstablishment();
    loadFestivos();
    loadAlergenos();
    loadClientes();
    loadHorarios();
    loadMesas();
    loadSalas();
    loadPlantilla();
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
