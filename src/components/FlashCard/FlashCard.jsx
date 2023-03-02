import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
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
    if (answerType === "wrong") {
      return <AiFillCloseCircle />;
    }
    if (answerType === "almostWrong") {
      return <AiFillQuestionCircle />;
    }
    if (answerType === "right") {
      return <AiFillCheckCircle />;
    }
    return <IoPlayOutline onClick={handleCardPlay} />;
  }

  return (
    <QuestionCard
      onTransitionEnd={() => !isFlipped && setIsOpen(false)}
      isFlipped={isFlipped}
      isOpen={isOpen}>
      <QuestionHeader answerType={answerType} isOpen={isOpen}>
        <h2>Pergunta {index + 1}</h2>
        {headerIcon()}
      </QuestionHeader>
      <QuestionMain isOpen={isOpen}>
        <FrontFace>
          {recall.question}
          <FlipArrow onClick={() => setIsFlipped(true)} />
        </FrontFace>
        <BackFace>
          {recall.answer}
          <BackFaceButtons>
            {buttonTypes.map((btn) => (
              <BackFaceButton
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
