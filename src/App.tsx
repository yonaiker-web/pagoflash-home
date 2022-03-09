import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import Dashboard from "./components/Dashboard"; */
import AppContext from "./context/AppContext";
/* import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";*/
import { publicDir, routes } from "./routes/routes"

const App = () => {
  const { home } = routes;

  return (
    <AppContext>
      <BrowserRouter>
        <Routes>

          {publicDir.map((publicRoute) => (
            <Route {...publicRoute} key={publicRoute.path}/>
          ))}

          <Route
            element={
              <>
                {/* <Dashboard /> */}
              </>
            }
            path={home}
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
