import { ResetStyle, GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <h1>Hello World!</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
