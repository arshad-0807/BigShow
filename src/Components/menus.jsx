import Home from "./Home";
import MoviesPage from "./MoviesPage";
import SignIn from "./SignIn";
import WebShow from "./WebShow";
import Element from "./Element";
import MainLayout from "../Layouts/MainLayout";
import SearchLayout from "../Layouts/SearchLayout";
import SignInLayout from "../Layouts/SignInLayout";
import Error from "./Error";
import OpenLayout from "../Layouts/OpenLayout";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import OtpValidation from "./OtpValidation";
import ResetPassword from "./ResetPassword";
import WatchList from "./WatchList";
import SecondaryLayout from "../Layouts/SecondaryLayout";
import ThirdLayout from "../Layouts/ThirdLayout";
import Dashboard from "./SignedInPages/Dashboard";
import MainHome from "./SignedInPages/MainHome";
import SignedInLayout from "../Layouts/SignedInLayout";
import MainMovies from "../Components/SignedInPages/MainMovies";
import MainWebshows from "./SignedInPages/MainWebshows";
import MainWatchlist from "./SignedInPages/MainWatchlist";

export const menusRoutes = [
  {
    path: "/",
    element: <Home />,
    layout: MainLayout,
  },

  {
    path: "/movies-page",
    element: <MoviesPage />,
    layout: MainLayout,
  },
  {
    path: "/watchlist",
    element: <WatchList />,
    layout: SecondaryLayout,
  },
  {
    path: "/web-shows",
    element: <WebShow />,
    layout: ThirdLayout,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    layout: SignInLayout,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    layout: SignInLayout,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    layout: SignInLayout,
  },
  {
    path: "/otp-validation",
    element: <OtpValidation />,
    layout: SignInLayout,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    layout: SignInLayout,
  },
  {
    path: "/element",
    element: <Element />,
    layout: SearchLayout,
  },

  {
    path: "/error",
    element: <Error />,
    layout: OpenLayout,
  },
  // SIGNED IN PAGES

  {
    path: "/main-home",
    element: <MainHome />,
    layout: SignedInLayout,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    layout: OpenLayout,
  },
  {
    path: "/main-movies",
    element: <MainMovies />,
    layout: SignedInLayout,
  },
  {
    path: "/main-webshows",
    element: <MainWebshows />,
    layout: SignedInLayout,
  },
  {
    path: "/main-watchlist",
    element: <MainWatchlist />,
    layout: SignedInLayout,
  },
];
