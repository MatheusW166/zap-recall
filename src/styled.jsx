import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  min-height: 100vh;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.overBackground};
  font-size: ${({ theme }) => theme.lg};
  display: grid;
  place-content: center;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
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
  padding: 50px 0 86px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export { Main, Container, Footer, Header };
