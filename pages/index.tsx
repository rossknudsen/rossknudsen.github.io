import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import React from "react";
import { Footer } from "../src/components/Footer";
import Grades from "../src/components/Grades";
import Qualifications from "../src/components/Qualifications";
import { Section } from "../src/components/Section";
import Skills from "../src/components/Skills";
import WorkExperienceTimeline from "../src/components/WorkExperienceTimeline";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useLocalStorageState from "use-local-storage-state";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default () => {
  const [mode, setMode] = useLocalStorageState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ross Knudsen CV
            </Typography>
            <ThemeToggle />
          </Toolbar>
        </AppBar>
        <Container>
          <div className="container">
            <Section title="Experience">
              <WorkExperienceTimeline />
            </Section>
            <Section title="Skills">
              <Skills />
            </Section>
            <Section title="Qualifications">
              <Qualifications />
            </Section>
            <Section title="Grades">
              <Grades />
            </Section>
          </div>
        </Container>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

function ThemeToggle() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

