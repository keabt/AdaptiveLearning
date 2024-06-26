import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Variables from "../components/Tutorials/Variables";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import VariableQuiz from "../components/Quiz/VariableQuiz";
import CombTermsQuiz from "../components/Quiz/CombTermsQuiz";
import EquivalentExp from "../components/Quiz/EquivalentExp";
import EvalExpQuiz from "../components/Quiz/EvalExpQuiz";
import Inequalities from "../components/Quiz/Inequalities";
import LinearEq from "../components/Quiz/LinearEq";
import { useNavigate } from "react-router-dom";

const steps = [
  "Variables",
  "Evaluating an expression",
  "Combining like terms",
  "Equivalent expressions",
  "Linear equations",
  "Inequalities",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Variables</Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1">
                  In math, variables are like placeholders for numbers. Instead
                  of using specific numbers, we use letters or symbols to
                  represent unknown or changing values. They help us solve
                  problems by letting us work with general situations rather
                  than specific instances. For example, in an equation like "2x
                  + 3 = 7," "x" is a variable representing an unknown number
                  that we can find using algebraic methods.
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingBottom: "50px",
                }}
              >
                <Typography variant="body1">
                  For example, in an equation like{" "}
                  <strong>
                    <br /> 2x + 3 = 7
                  </strong>
                  <strong>
                    <br /> x{" "}
                  </strong>{" "}
                  is a variable representing an unknown number that we can find
                  using algebraic methods.
                </Typography>
              </div>

              <VariableQuiz />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Evaluating an expression</Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1">
                  When you're asked to evaluate an expression that has more than
                  one variable, it means you need to plug in numbers for each
                  variable and then solve the expression. So, instead of seeing
                  letters like x or y, you'll see numbers. This helps us find
                  out what the expression equals.
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingBottom: "50px",
                }}
              >
                <Typography variant="body1">
                  For example, if you have the expression{" "}
                  <strong>
                    <br />
                    3x+2y
                    <br />
                  </strong>{" "}
                  and you're told{" "}
                  <strong>
                    <br />
                    x=4{" "}
                  </strong>
                  and
                  <strong>
                    {" "}
                    y=5,
                    <br />{" "}
                  </strong>
                  you replace x with 4 and y with 5, giving you <br />
                  <strong>3(4) + 2(5)</strong>.<br /> Then you just solve it
                  like a regular math problem to find the answer. Which in this
                  case would be <br />
                  <strong>22</strong>
                </Typography>
              </div>

              <EvalExpQuiz />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Combining Like Terms</Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1">
                  In algebra, terms are the building blocks of expressions. Each
                  term consists of a coefficient (a number) and a variable (like
                  x or y), which are usually multiplied together. When you see
                  expressions like "2x + 3x", where the variables are the same
                  (in this case, both x), these are called like terms. Like
                  terms can be combined by adding or subtracting their
                  coefficients.{" "}
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingBottom: "50px",
                }}
              >
                <Typography variant="body1">
                  For example: Consider the expression:
                  <br /> <strong>2x + 3y - 4x - 5y </strong>
                  <br />
                  Here, we have four terms:
                  <br /> <strong>2x, 3y, -4x, and -5y </strong>.<br />
                  Terms 2x and -4x both have the variable x, making them like
                  terms. Terms 3y and 5y both have the variable y, making them
                  like terms. We can combine like terms separately:
                  <br />
                  For the x terms: <strong>2x - 4x = (2 - 4)x= -2x </strong>
                  <br />
                  For the y terms: <strong>
                    3y - 5y = (3 - 5)y = -2y{" "}
                  </strong>{" "}
                  <br />
                  So, after combining like terms, our expression simplifies to:
                  <br /> <strong>-2x-2y </strong>
                  <br />
                </Typography>
              </div>
              <CombTermsQuiz />
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Equivalent Expressions</Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1">
                  Equivalent expressions in math are like different paths
                  leading to the same destination. Even though they may appear
                  different, when you replace the variables with the same
                  numbers, they give you the same result.
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingBottom: "50px",
                }}
              >
                <Typography variant="body1">
                  For example: Let's say we have two expressions:{" "}
                  <strong>
                    <br />
                    2x+3
                  </strong>
                  and{" "}
                  <strong>
                    3+2x
                    <br />
                  </strong>
                  . Even though they look different, they're equivalent
                  expressions because they represent the same thing. For
                  instance, <br />
                  if <strong>x=4</strong>, when you plug in <strong>4</strong>{" "}
                  for <strong>x</strong>,<br /> both expressions give you the
                  same result: <strong>11</strong>. So, even though they seem
                  different, they lead to the same answer. That's what makes
                  them equivalent!
                </Typography>
              </div>
              <EquivalentExp />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Linear Equations</Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1">
                  Think of a linear equation as a math sentence that shows how
                  two things are linked in a straight line. In this sentence,
                  you have a mystery number, represented by a letter like x,
                  which we're trying to figure out. There's also a number that
                  tells us how many times this mystery number appears, called
                  the coefficient. Other numbers in the equation are just
                  regular numbers, they don't change. Solving the equation means
                  finding the value for the mystery number that makes the
                  sentence true.
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingBottom: "50px",
                }}
              >
                <Typography variant="body1">
                  For example: in the equation
                  <strong>
                    <br />
                    2x+3=7
                  </strong>
                  <br />
                  <strong>x </strong>
                  is the mystery number,<strong>2 </strong> tells us how many
                  times
                  <strong> x</strong> is used, and <strong>3</strong> and{" "}
                  <strong>7 </strong> are regular numbers. To solve it, we need
                  to figure out what <strong>x</strong> is. Start by getting rid
                  of any constant terms on the side with the variable. In this
                  case, we'll subtract <strong>3</strong> from both sides to
                  move the constant term <strong>3</strong> to the other side:{" "}
                  <br />
                  <strong>2x+3-3=7-3</strong>
                  <br />
                  This simplifies to:
                  <strong>2x=4</strong>
                  <br /> Now, we want to get <strong>x </strong>
                  alone. Since <strong>2x</strong> means <strong>2</strong>{" "}
                  times <strong>x</strong>, to isolate <strong>x</strong>, we
                  need to do the opposite operation, which is dividing both
                  sides by <strong>2</strong> <br />
                  <strong>2x/2 = 4/2 </strong>
                  <br /> This simplifies to: <strong>x=2</strong> So, the
                  solution to the equation
                  <br />
                  <strong> 2x+3=7 is x=2.</strong>
                </Typography>
              </div>
              <LinearEq />
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Inequalities</Typography>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1">
                  Inequalities are like equations, but instead of saying two
                  things are equal, they express a relationship between two
                  things that might not be equal.
                </Typography>
              </div>
              <div
                style={{
                  width: "40%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingBottom: "50px",
                }}
              >
                <Typography variant="body1">
                  For the example: <br /> <strong>5x−4&gt;2x+3</strong> <br />{" "}
                  First, let's isolate the variable <strong>x</strong> on one
                  side. We'll do this by moving terms around. Subtracting{" "}
                  <strong>2x</strong> from both sides, we get{" "}
                  <strong>5x−2x−4&gt;3 </strong>
                  Simplifying this, we have: <strong>3x−4&gt;3</strong> Next,
                  let's isolate <strong>x</strong> completely. We'll add{" "}
                  <strong>4</strong> to both sides:{" "}
                  <strong>3x−4+4&gt;3+4 = 3x&gt;7 </strong> Finally, to find{" "}
                  <strong>x</strong> , we divide both sides by{" "}
                  <strong>3.</strong> <br />
                  <strong>
                    3x/3 &gt; 7/3 = x &gt; 7/3 x&gt; 3 7 ​{" "}
                  </strong> So, <strong>x</strong> can take any value greater
                  than <strong>7/3</strong> ​
                </Typography>
              </div>
              <Inequalities />
            </div>
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      <h1
        style={{
          color: "#323232",
          margin: "0",
          marginBottom: "1px",
          textAlign: "center",
        }}
      >
        Tutorials
      </h1>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Confetti width={width} height={height} />

            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <iframe
                  src="https://giphy.com/embed/obN7DdnUWxuyqz5qZS"
                  width="480"
                  height="384"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/nice-done-did-it-obN7DdnUWxuyqz5qZS">
                    via GIPHY
                  </a>
                </p>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
  onClick={handleReset}
  sx={{
    backgroundColor: '#003366', 
    color: 'white', 
    '&:hover': {
      backgroundColor: '#002147', 
    },
    mr: 1, 
  }}
>
  Redo Tutorial
</Button>            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
  onClick={() => navigate("/subjects")}
  sx={{
    backgroundColor: '#003366',
    color: 'white', 
    '&:hover': {
      backgroundColor: '#002147', 
    },
    mr: 1, 
  }}
>
  Home
</Button>            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {getStepContent(activeStep)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
  color="inherit"
  disabled={activeStep === 0}
  onClick={handleBack}
  sx={{
    backgroundColor: '#003366', 
    color: 'white', 
    '&:hover': {
      backgroundColor: '#002147', 
    },
    mr: 1, 
  }}
>
  Back
</Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext}
                sx={{
                  backgroundColor: "#003366", 
                  color: "white", 
                  "&:hover": {
                    backgroundColor: "#002147", 
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}
