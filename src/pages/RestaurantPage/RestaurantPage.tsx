import DailyReservations from "../../components/restaurantPageComponents/dailyReservations/DailyReservations";
import RestaurantLayout from "../../components/restaurantPageComponents/restaurantLayout/RestaurantLayout";

import {
  RestaurantPageContainer,
  LeftSection,
  RightSection,
} from "./RestaurantPage.styles";

function RestaurantPage() {
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
