import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";

const types = {
  wrong: "wrong",
  almostWrong: "almostWrong",
  right: "right",
};

const typeIcons = {
  wrong: <AiFillCloseCircle data-test="no-icon" />,
  almostWrong: <AiFillQuestionCircle data-test="partial-icon" />,
  right: <AiFillCheckCircle data-test="zap-icon" />,
};

const hitPercentMessages = {
  good: {
    title: "🥳 Parabéns!",
    text: "Você não esqueceu de nenhum flashcard!",
  },
  bad: {
    title: "😢 Putz...",
    text: "Ainda faltam alguns... Mas não desanime!",
  },
};

export { types, typeIcons, hitPercentMessages };
