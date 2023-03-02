import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import {
  BackFace,
  FrontFace,
  QuestionCard,
  QuestionHeader,
  QuestionMain,
  BackFaceButton,
  BackFaceButtons,
} from "./styled";
import FlipArrow from "./FlipArrow";
import { buttonTypes } from "./constants";
import { typeIcons } from "../../constants";

const dataTestsButtons = {
  wrong: "no-btn",
  almostWrong: "partial-btn",
  right: "zap-btn",
};

export default function FlashCard({ recall, index, onCardAnswered }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answerType, setAnswerType] = useState();

  function handleBackFaceButton(answerType) {
    setIsFlipped(false);
    setAnswerType(answerType);
    if (onCardAnswered) onCardAnswered(answerType);
  }

  function handleCardPlay() {
    // Se já respondeu, não faz nada
    if (answerType) return;
    setIsOpen(true);
  }

  function headerIcon() {
    if (answerType) return typeIcons[answerType];
    return <IoPlayOutline data-test="play-btn" onClick={handleCardPlay} />;
  }

  return (
    <QuestionCard
      data-test="flashcard"
      onTransitionEnd={() => !isFlipped && setIsOpen(false)}
      isFlipped={isFlipped}
      isOpen={isOpen}>
      <QuestionHeader answerType={answerType} isOpen={isOpen}>
        <h2 data-test="flashcard-text">Pergunta {index + 1}</h2>
        {headerIcon()}
      </QuestionHeader>
      <QuestionMain isOpen={isOpen}>
        <FrontFace data-test="flashcard-text">
          {recall.question}
          <FlipArrow onClick={() => setIsFlipped(true)} />
        </FrontFace>
        <BackFace data-test="flashcard-text">
          {recall.answer}
          <BackFaceButtons>
            {buttonTypes.map((btn) => (
              <BackFaceButton
                data-test={dataTestsButtons[btn.type]}
                key={btn.type}
                onClick={() => handleBackFaceButton(btn.type)}
                answerType={btn.type}>
                {btn.text}
              </BackFaceButton>
            ))}
          </BackFaceButtons>
        </BackFace>
      </QuestionMain>
    </QuestionCard>
  );
}
