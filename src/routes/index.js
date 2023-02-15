import Home from "../pages/home";
import Vendor from "../components/Vendor"

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/vendor",
    element: <Vendor/>,
  },
];

export default router;