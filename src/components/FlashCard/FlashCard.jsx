import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import {
  BackFace,
  FrontFace,
  QuestionCard,
  QuestionHeader,
  QuestionMain,
} from "./styled";
import FlipArrow from "./FlipArrow";

export default function FlashCard({ recall, index, onCardPlay }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <QuestionCard isFlipped={isFlipped} isOpen={isOpen}>
      <QuestionHeader isOpen={isOpen}>
        <h2>Pergunta {index + 1}</h2>
        <IoPlayOutline
          onClick={() => {
            setIsOpen(true);
            if (onCardPlay) onCardPlay();
          }}
        />
      </QuestionHeader>
      <QuestionMain isOpen={isOpen}>
        <FrontFace>
          {recall.question}
          <FlipArrow onClick={() => setIsFlipped(true)} />
        </FrontFace>
        <BackFace>
          {recall.answer}
          <div>
            <button>Botão 1</button>
            <button>Botão 2</button>
            <button>Botão 3</button>
          </div>
        </BackFace>
      </QuestionMain>
    </QuestionCard>
  );
}
