import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { BorderClearRounded } from "@mui/icons-material";

export default function FirstPage(props) {
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
          Welcome! First thing is first...
        </Typography>
        <br />
        <Typography variant="body1">
          You can always change them later.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 5, width: 400 }}
        >
          <Typography variant="body1" sx={{ fontWeight: "Medium" }}>
            Full Name
          </Typography>
          <TextField
            sx={{ mb: 2 }}
            size="small"
            margin="normal"
            fullWidth
            id="FName"
            name="FName"
            placeholder="Steve Jobs"
            autoFocus
          />
          <label>Display Name</label>
          <TextField
            margin="normal"
            size="small"
            fullWidth
            id="DName"
            name="DName"
            placeholder="Steve"
          />

          <Button
            type="submit"
            fullWidth
            color="primary"
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
