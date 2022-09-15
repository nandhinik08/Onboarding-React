import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import FirstPage from "./firstpage";
import { useState, useEffect } from "react";
import Home from "./home";
import Planning from "./planning";
import Final from "./final";

const steps = ["", "", "", ""];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  useEffect(() => setActiveStep(0), []);
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "40%", margin: "auto" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        sx={{
          marginTop: "auto",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {allStepsCompleted() ? (
          <React.Fragment>
            <Final handleComplete={0}></Final>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep == 0 ? (
                <FirstPage handleComplete={handleComplete}></FirstPage>
              ) : (
                ""
              )}
              {activeStep == 1 ? (
                <Home handleComplete={handleComplete}></Home>
              ) : (
                ""
              )}
              {activeStep == 2 ? (
                <Planning handleComplete={handleComplete}></Planning>
              ) : (
                ""
              )}
              {activeStep == 3 ? (
                <Final handleComplete={handleComplete}></Final>
              ) : (
                ""
              )}
            </Typography>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
