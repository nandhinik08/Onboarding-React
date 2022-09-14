import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Home(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.handleComplete();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Let`s set up a home for all your work
          </Typography>
          <br />
          <Typography component="p" variant="p">
            You can always create another Workspace later.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <label>Workspace Name</label>
            <TextField
              margin="normal"
              fullWidth
              id="WName"
              name="WName"
              placeholder="Eden"
              autoFocus
            />
            <label>
              Workspace URL <alt>(optional)</alt>
            </label>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "40%",
                }}
              >
                <TextField
                  margin="normal"
                  id="WURL"
                  name="WURL"
                  disabled
                  defaultValue={"www.eden.com/"}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  margin="normal"
                  id="URL"
                  name="URL"
                  placeholder="Example"
                  fullWidth
                />
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Workspace
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
