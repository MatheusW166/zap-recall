import styled from "styled-components";

function calcCardHeight({ isOpen, isFlipped, answerType, backFaceRef }) {
  if (!isOpen) {
    return "65px";
  }
  const verticalPadding = 44;
  const yTranslate = isFlipped || (!isFlipped && answerType) ? 0 : 22;
  const expandedHeight =
    backFaceRef?.current.clientHeight + yTranslate + verticalPadding;
  return `${expandedHeight}px`;
}

function initialOpacity({ isOpen, answerType }) {
  if (!isOpen && !answerType) {
    return 0;
  }
  return 1;
}

const DURATION = "0.6s";

function setUpAnimation({ index, isOpen, answerType }) {
  if (isOpen || answerType) {
    return "none";
  }
  return `entrance ${DURATION} ${0.1 * index}s ease forwards`;
}

function cardFlip({ isFlipped }) {
  return isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
}

function cardBackgroundColor({ isOpen, theme }) {
  return isOpen ? theme.questionCard : theme.overBackground;
}

const CARD_PADDING = "22px 16px";
const CARD_WIDTH = "min(500px, calc(100% - 64px))";

const QuestionCard = styled.article`
  position: relative;
  width: ${CARD_WIDTH};
  height: ${(props) => calcCardHeight(props)};
  background-color: ${(props) => cardBackgroundColor(props)};
  font-size: ${({ theme }) => theme.md};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: ${CARD_PADDING};
  transform-style: preserve-3d;
  transition: transform ease 0.6s, height ease 0.6s, background-color ease 0.6s;
  transform: ${(props) => cardFlip(props)};
  opacity: ${(props) => initialOpacity(props)};
  animation: ${(props) => setUpAnimation(props)};
`;

const QuestionHeader = styled.header`
  ${({ isOpen }) =>
    isOpen &&
    `
    position: absolute;
    left: 0;
    padding: ${CARD_PADDING};
    opacity: 0;
    `}
  height: 100%;
  transition: opacity ease 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.md};
  font-weight: 700;
  color: ${({ theme, answerType }) => theme[answerType]};
  text-decoration: ${({ answerType }) => answerType && "line-through 2px"};
  svg {
    font-size: 26px;
    cursor: pointer;
  }
`;

const QuestionMain = styled.main`
  ${({ isOpen }) =>
    !isOpen &&
    `
    visibility: hidden;
    position: absolute;
   `}
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.lg};
`;

const FrontFace = styled.div`
  opacity: ${({ isOpen }) => !isOpen && 0};
  transition: opacity ease 0.5s 0.3s;
  width: 100%;
  height: 100%;
  line-height: 21.6px;
  backface-visibility: hidden;
  svg {
    position: absolute;
    right: 0;
    bottom: -12px;
    cursor: pointer;
  }
`;

const BackFace = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  line-height: 21.6px;
  will-change: transform;
  width: 100%;
  min-height: 100%;
`;

const BackFaceButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  min-height: 38px;
  transform: translateY(10px);
`;

const BackFaceButton = styled.button`
  flex: 1;
  border-radius: 5px;
  min-height: 100%;
  font-size: 12px;
  color: ${({ theme }) => theme.overBackground};
  background: ${({ theme, answerType }) => theme[answerType]};
  cursor: pointer;
`;

export {
  BackFace,
  FrontFace,
  QuestionCard,
  QuestionHeader,
  QuestionMain,
  BackFaceButtons,
  BackFaceButton,
};
