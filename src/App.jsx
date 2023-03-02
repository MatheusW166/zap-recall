import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { Container, Main, Header } from "./styled";
import { Footer } from "./components/Footer";
import FlashCardsList from "./components/FlashCardsList";
import ZapRecall from "./assets/lightning.png";
import theme from "./theme";
import { useState } from "react";
import recalls from "./recalls";
import { types, hitPercentMessages } from "./constants";

function App() {
  const [doneRecalls, setDoneRecalls] = useState([]);

  function handleFlashClick(answerType) {
    setDoneRecalls([...doneRecalls, answerType]);
  }

  const message = (() => {
    if (doneRecalls.length !== recalls.length) return;
    if (doneRecalls.includes(types.wrong)) {
      return hitPercentMessages.bad;
    }
    return hitPercentMessages.good;
  })();

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
          <Footer
            total={recalls.length}
            doneRecalls={doneRecalls}
            message={message}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
