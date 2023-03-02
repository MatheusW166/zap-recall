import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  min-height: 100vh;
`;

export { Container };
