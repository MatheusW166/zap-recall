import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import { Container, Main, Header, Footer } from "./styled";
import FlashCardsList from "./components/FlashCardsList";
import ZapRecall from "./assets/lightning.png";
import theme from "./theme";

const recalls = [
  {
    question: "Alguma pergunta",
    answer:
      "Resposta da pergunta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dolores accusantium necessitatibus, ut aliquam. Enim, ipsa eos repellat unde repudiandae veritatis voluptates quas incidunt consequuntur tempore possimus illum quae?",
  },
  {
    question: "Alguma pergunta 2",
    answer:
      "Resposta da pergunta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dolores accusantium necessitatibus, ut aliquam. Enim, ipsa eos repellat unde repudiandae veritatis voluptates quas incidunt consequuntur tempore possimus illum quae?",
  },
  {
    question: "Alguma pergunta 3",
    answer:
      "Resposta da pergunta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dolores accusantium necessitatibus, ut aliquam. Enim, ipsa eos repellat unde repudiandae veritatis voluptates quas incidunt consequuntur tempore possimus illum quae?",
  },
  {
    question: "Alguma pergunta 4",
    answer:
      "Resposta da pergunta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dolores accusantium necessitatibus, ut aliquam. Enim, ipsa eos repellat unde repudiandae veritatis voluptates quas incidunt consequuntur tempore possimus illum quae?",
  },
];

function App() {
  function handleFlashClick(index) {
    console.log(`Abriou o ${index + 1}`);
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
            <FlashCardsList onCardPlay={handleFlashClick} recalls={recalls} />
          </Main>
          <Footer>0/154 CONCLUÍDOS</Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
