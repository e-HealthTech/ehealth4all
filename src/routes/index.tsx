import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/error/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Error />,
  },
]);

export default router;
