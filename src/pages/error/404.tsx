import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Error = () => {
  const handleClick = () => {
    toast.error("You can't go HOME...Without creating your first issue", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "2rem",
        }}
      >
        Hey dev, far from Home? Make your first contribution before leaving...
      </Typography>
      <Link to="/" onClick={handleClick}>
        This Way Home
      </Link>
    </Box>
  );
};
export default Error;
