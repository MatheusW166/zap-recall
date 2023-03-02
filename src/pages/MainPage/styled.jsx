import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 60px;
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

export { Main, Header };
