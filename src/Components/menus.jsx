import Home from "./Home";
import MoviesPage from "./MoviesPage";
import SignIn from "./SignIn";
import WebShow from "./WebShow";
import Element from "./Element";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
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
    path: "/element",
    element: <Element />,
    layout: SearchLayout,
  },
  {
    path: "/error",
    element: <Error />,
    layout: OpenLayout,
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
];
