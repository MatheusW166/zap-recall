import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { Container } from "./styled";
import theme from "./theme";
import { useState } from "react";
import { InitPage } from "./pages/InitPage";
import { MainPage } from "./pages/MainPage";

function App() {
  const [showInit, setShowInit] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <Container>
          {showInit && <InitPage onClickInit={() => setShowInit(false)} />}
          {!showInit && <MainPage />}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
