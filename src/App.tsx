import { ThemeProvider } from "@material-ui/core";
import Theme from "./config/theme";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./routes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RouterProvider router={AppRoute} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
