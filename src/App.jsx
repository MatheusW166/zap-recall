import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { Container, Main, Header, Footer } from "./styled";
import FlashCardsList from "./components/FlashCardsList";
import ZapRecall from "./assets/lightning.png";
import theme from "./theme";
import { useState } from "react";
import recalls from "./recalls";

function App() {
  const [doneRecalls, setDoneRecalls] = useState([]);

  function handleFlashClick(answerType) {
    setDoneRecalls([...doneRecalls, answerType]);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <Container>
          <Header>
            <img src={ZapRecall} alt="logo" />
            <h1>ZapRecall</h1>
          </Header>
          <Main>
            <FlashCardsList
              onCardAnswered={handleFlashClick}
              recalls={recalls}
            />
          </Main>
          <Footer>
            {doneRecalls.length}/{recalls.length} CONCLUÍDOS
          </Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
