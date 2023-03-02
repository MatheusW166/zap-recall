import { types } from "../../constants";

const buttonTypes = [
  {
    text: "Não lembrei",
    type: types.wrong,
  },
  {
    text: "Quse não lembrei",
    type: types.almostWrong,
  },
  {
    text: "Zap!",
    type: types.right,
  },
];

export { buttonTypes };
