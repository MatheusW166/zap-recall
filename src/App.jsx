import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { Container, Main, Header, Footer } from "./styled";
import ZapRecall from "./assets/lightning.png";
import theme from "./theme";

function App() {
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
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </Main>
          <Footer>0/154 CONCLUÍDOS</Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
