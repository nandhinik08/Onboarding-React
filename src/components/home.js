import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
          Let&apos;s set up a home for all your work
        </Typography>
        <br />
        <Typography variant="body1">
          You can always create another Workspace later.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 5, width: 400 }}
        >
          <label>Workspace Name</label>
          <TextField
            margin="normal"
            size="small"
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
                width: "55%",
              }}
            >
              <TextField
                margin="normal"
                size="small"
                id="WURL"
                name="WURL"
                disabled
                defaultValue={"www.eden.com/"}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TextField
                margin="normal"
                size="small"
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
            size="large"
            sx={{ mt: 3, mb: 2, textTransform: "none" }}
          >
            Create Workspace
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
