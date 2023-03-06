import styled from "styled-components";

const DURATION = "0.6s";

function animationSetup({ recallsNumber }, aditionalDelay = 0) {
  const delay = recallsNumber * 0.1 + aditionalDelay;
  return `entrance ${DURATION} ${delay}s ease forwards`;
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 60px;
  h1 {
    opacity: 0;
    animation: ${(props) => animationSetup(props)};
  }
  img {
    width: 52px;
    height: 60px;
    opacity: 0;
    animation: ${(props) => animationSetup(props, 0.1)};
  }
`;

const Main = styled.div`
  padding-bottom: 186px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export { Main, Header };
