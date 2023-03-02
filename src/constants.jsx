import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";

const typeIcons = {
  wrong: <AiFillCloseCircle />,
  almostWrong: <AiFillQuestionCircle />,
  right: <AiFillCheckCircle />,
};

export { typeIcons };
