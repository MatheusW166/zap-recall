import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 16px;
  min-height: 70px;
  max-height: 186px;
  width: 100%;
  background: ${({ theme }) => theme.overBackground};
  font-size: ${({ theme }) => theme.lg};
  display: grid;
  place-content: center;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;

  transform: translateY(100%);
  animation: bottomToTop 0.6s ${({ recallsNumber }) => recallsNumber * 0.1}s
    ease forwards;

  @keyframes bottomToTop {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const TypeIcons = styled.div`
  display: ${({ doneRecalls }) => (doneRecalls?.length ? "flex" : "none")};
  justify-content: center;
  margin-top: 6px;
  gap: 5px;
  font-size: 23px;
`;

const TypeIconWrapper = styled.span`
  color: ${({ theme, answerType }) => theme[answerType]};
`;

const HitPercentMessage = styled.div`
  text-align: center;
  max-width: 222px;
  font-size: ${({ theme }) => theme.lg};
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  line-height: 21.6px;
`;

export { FooterContainer, HitPercentMessage, TypeIconWrapper, TypeIcons };
