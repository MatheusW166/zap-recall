import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 60px;
  h1 {
    height: fit-content;
    font-family: "Righteous", sans-serif;
    color: ${({ theme }) => theme.overBackground};
    font-size: ${({ theme }) => theme.xs};
  }
  img {
    width: 52px;
    height: 60px;
  }
`;

const Main = styled.div`
  padding-bottom: 186px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export { Main, Container, Header };
