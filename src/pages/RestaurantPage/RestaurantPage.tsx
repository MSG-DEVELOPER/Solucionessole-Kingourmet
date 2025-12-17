import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DailyReservations from "../../components/restaurantPageComponents/dailyReservations/DailyReservations";
import RestaurantLayout from "../../components/restaurantPageComponents/restaurantLayout/RestaurantLayout";
import { getConfig } from "../../services/configService";
import { getEstablishment } from "../../services/establishmentService";
import type { RootState } from "../../redux/store";
import { setConfig } from "../../redux/slices/config/configSlice";
import { setEstablishment } from "../../redux/slices/establishment/establishmentSlice";

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
    

    loadConfig();
    loadEstablishment();
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
