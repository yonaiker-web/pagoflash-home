import HomePage from "../pages/HomePage";

interface DirRoutes {
  path: string;
  element: JSX.Element;
}

export const routes = {
  home: "/",
};

export const publicDir: DirRoutes[] = [
  { path: routes.home, element: <HomePage /> },
  /* { path: routes.login, element: <LoginPage /> },
  { path: routes.register, element: <RegisterPage /> },
  { path: routes.payment, element: <PaymentPage /> } */
];

export const privateDir: DirRoutes[] = [
  //{ path: routes.home, element: <HomePage /> },
];
