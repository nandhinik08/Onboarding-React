import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import GroupsIcon from "@mui/icons-material/Groups";

const theme = createTheme();

export default function Planning(props) {
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
          <Typography component="h1" variant="h4">
            How are you planning to use Eden?
          </Typography>
          <br />
          <Typography component="p" variant="p">
            We`ll streamline your setup experience accordingly.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Card raised sx={{ maxWidth: 345, marginRight: 2 }}>
                <CardContent>
                  <PersonIcon />
                  <Typography variant="h6" color="text.primary">
                    For myself
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Write better.Think more clearly.Stay organized
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <GroupsIcon />
                  <Typography variant="h6" color="text.primary">
                    With my team
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wikis, docs, tasks & projects, all in one place.
                  </Typography>
                </CardContent>
              </Card>
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
