import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/layout";
import Home from "components/pages/Home";
import Auth from "components/pages/Auth/Auth";
import BookingForm from "components/pages/Reservations/BookingForm";
import ConfirmedReservation from "components/pages/Reservations/Confirmed";
import NotFound from "components/pages/NotFound";
import * as ROUTES from "constants/routes";
import ScrollToTop from "components/layout/ScrollToTop";
import { initializeTimes } from "utils/helpers";
import { updateTimes } from "utils/helpers";
import { QueryClientProvider, QueryClient } from "react-query";
import { LoggedOutRoute, ProtectedRoute } from "helpers/routes";
const App = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path={ROUTES.LOGIN}
              element={<LoggedOutRoute outlet={<Auth />} />}
            />
            <Route
              path={ROUTES.REGISTER}
              element={<LoggedOutRoute outlet={<Auth />} />}
            />
            <Route
              path={ROUTES.BOOKING_FORM}
              element={
                <ProtectedRoute
                  outlet={
                    <BookingForm
                      availableTimes={availableTimes}
                      dispatch={dispatch}
                    />
                  }
                />
              }
            />
            <Route path={ROUTES.CONFIRMED} element={<ConfirmedReservation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path={"/" + ROUTES.HOME} element={<Home />} />
        </Routes>
      </ScrollToTop>
    </QueryClientProvider>
  );
};
export default App;
