import * as React from "react";
import Button from "@mui/material/Button";

import ButtonBase from "@mui/material/ButtonBase";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonIcon from "@mui/icons-material/Person";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import GroupsIcon from "@mui/icons-material/Groups";
import { CardActionArea } from "@mui/material";

export default function Planning(props) {
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
          How are you planning to use Eden?
        </Typography>
        <br />
        <Typography variant="body1">
          We`ll streamline your setup experience accordingly.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ m: 2 }}>
              <Card sx={{ maxWidth: 345 }}>
                <ButtonBase onClick={(event) => {}}>
                  <CardContent>
                    <PersonIcon />
                    <Typography variant="h6" color="text.primary">
                      For myself
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Write better.Think more clearly.Stay organized
                    </Typography>
                  </CardContent>
                </ButtonBase>
              </Card>
            </Box>

            <Box sx={{ m: 2 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <GroupsIcon />
                    <Typography variant="h6" color="text.primary">
                      With my team
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Wikis, docs, tasks & projects, all in one place.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
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
  );
}
