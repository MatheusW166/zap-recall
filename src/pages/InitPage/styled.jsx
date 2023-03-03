import styled from "styled-components";

const InitPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 24px;
`;

const InitButton = styled.button`
  background: ${({ theme }) => theme.overBackground};
  color: ${({ theme }) => theme.initButton};
  font-size: ${({ theme }) => theme.lg};
  width: min(246px, 100%);
  height: 54px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.initButton};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-top: 16px;
  cursor: pointer;
  transition: filter ease 0.3s, box-shadow ease 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    box-shadow: none;
  }
`;

export { InitButton, InitPageContainer };
