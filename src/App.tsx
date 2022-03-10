import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
/* import Dashboard from "./components/Dashboard"; */
import AppContext from "./context/AppContext";
/* import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";*/
import { publicDir, routes } from "./routes/routes";

import "./theme/app-theme.css";
import "./theme/devices.css";

const App = () => {
  const { home } = routes;

  return (
    <AppContext>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            {publicDir.map((publicRoute) => (
              <Route {...publicRoute} key={publicRoute.path} />
            ))}

            <Route element={<>{/* <Dashboard /> */}</>} path={home} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
