import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DailyReservations from "../../components/restaurantPageComponents/dailyReservations/DailyReservations";
import RestaurantLayout from "../../components/restaurantPageComponents/restaurantLayout/RestaurantLayout";
import { getConfig } from "../../services/config/getConfig";
import { getEstablishment } from "../../services/establishment/getEstablishment";
import { getFestivos } from "../../services/festivos/getFestivos";
import type { RootState } from "../../redux/store";
import { setConfig } from "../../redux/slices/config/configSlice";
import { setEstablishment } from "../../redux/slices/establishment/establishmentSlice";
import { setFestivos } from "../../redux/slices/festive/festiveSlice";

import {
  RestaurantPageContainer,
  LeftSection,
  RightSection,
} from "./RestaurantPage.styles";

function RestaurantPage() {
  const dispatch = useDispatch();
  const establecimientoId = useSelector(
    (state: RootState) => state.auth.establecimientoId
  );
  const config = useSelector((state: RootState) => state.config.data);

  useEffect(() => {
    if (config || !establecimientoId) return;

    const token = sessionStorage.getItem("token");
    if (!token) return;

    async function loadConfig() {
      try {
        const res = await getConfig(token as string, establecimientoId);
        if (res.data) {
          dispatch(setConfig(res.data));
        }
        console.log(res.message);
      } catch (error) {
        console.error(error);
      }
    }

    async function loadEstablishment() {
      try {
        const data = await getEstablishment(
          token as string,
          establecimientoId
        );
    
        if (data) {
          dispatch(setEstablishment(data));
        }
    
       
      } catch (error) {
        console.error(error);
      }
    }

    async function loadFestivos() {
      try {
        const festivos = await getFestivos(
          token as string,
          establecimientoId
        );
    
        if (festivos) {
          dispatch(setFestivos(festivos));
        }
      } catch (error) {
        console.error("Error al cargar festivos:", error);
      }
    }
    

    loadConfig();
    loadEstablishment();
    loadFestivos();
  }, [dispatch, config, establecimientoId]);

  return (
    <RestaurantPageContainer>
      <LeftSection>
        <RestaurantLayout />
      </LeftSection>

      <RightSection>
        <DailyReservations />
      </RightSection>
    </RestaurantPageContainer>
  );
}

export default RestaurantPage;
