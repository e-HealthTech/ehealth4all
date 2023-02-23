import { createTheme } from "@material-ui/core";
import { white } from "./colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: white,
    },
  },
});

export default Theme;
