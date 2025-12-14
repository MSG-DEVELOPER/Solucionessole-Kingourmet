import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DailyReservations from "../../components/restaurantPageComponents/dailyReservations/DailyReservations";
import RestaurantLayout from "../../components/restaurantPageComponents/restaurantLayout/RestaurantLayout";
import { getConfig } from "../../services/configService";
import type { RootState } from "../../redux/store";
import { setConfig } from "../../redux/slices/config/configSlice";

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
    // Si ya tenemos la config en Redux, no hacemos fetch
    if (config || !establecimientoId) return;

    const token = sessionStorage.getItem("token");
    if (!token) return;

    async function loadConfig() {
      try {
        const res = await getConfig(token as string, establecimientoId);
        // Guardamos toda la data en Redux
        if (res.data) {
          dispatch(setConfig(res.data));
        }
        console.log(res.message); // alert opcional o console
      } catch (error) {
        console.error(error);
      }
    }

    loadConfig();
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
