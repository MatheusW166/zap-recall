import { ResetStyle, GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Container } from "./styled";
import { InitPage } from "./pages/InitPage";
import { MainPage } from "./pages/MainPage";
import theme from "./theme";

function App() {
  const [showInit, setShowInit] = useState(true);
  const [selectedRecalls, setSelectedRecalls] = useState();

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <Container>
          {showInit ? (
            <InitPage
              selectedRecalls={selectedRecalls}
              setSelectedRecalls={setSelectedRecalls}
              onClickInit={() => setShowInit(false)}
            />
          ) : (
            <MainPage recalls={selectedRecalls} />
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
