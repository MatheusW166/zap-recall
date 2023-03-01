import styled from "styled-components";

const QuestionCard = styled.article`
  height: ${({ isOpen }) => (isOpen ? "fit-content" : "65px")};
  width: min(500px, calc(100% - 64px));
  font-size: ${({ theme }) => theme.md};
  background: ${({ theme }) => theme.overBackground};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 22px 16px;
  transform-style: preserve-3d;
  transition: transform ease 0.8s;
  transform: ${({ isFlipped }) => isFlipped && "rotateY(180deg)"};
`;

const QuestionHeader = styled.header`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.md};
  font-weight: 700;
  svg {
    font-size: 26px;
    cursor: pointer;
  }
`;

const QuestionMain = styled.main`
  display: ${({ isOpen }) => !isOpen && "none"};
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  font-size: ${({ theme }) => theme.lg};
`;

const FrontFace = styled.div`
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    right: 0;
    bottom: -12px;
    cursor: pointer;
  }
  backface-visibility: hidden;
  line-height: 21.6px;
`;

const BackFace = styled.div`
  margin-top: ${({ theme }) => `calc(-${theme.lg} - 4px)`};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  line-height: 21.6px;
  will-change: transform;
`;

export { BackFace, FrontFace, QuestionCard, QuestionHeader, QuestionMain };
