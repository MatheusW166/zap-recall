import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Container } from "./styled";
import { InitPage } from "./pages/InitPage";
import { MainPage } from "./pages/MainPage";
import theme from "./theme";

function App() {
  const [showInit, setShowInit] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <Container>
          {showInit ? (
            <InitPage onClickInit={() => setShowInit(false)} />
          ) : (
            <MainPage />
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
