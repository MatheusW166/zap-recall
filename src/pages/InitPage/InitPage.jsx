import Lightning from "../../assets/lightning_lg.png";
import { InitButton, InitPageContainer } from "./styled";

export default function InitPage({ onClickInit }) {
  return (
    <InitPageContainer>
      <img src={Lightning} alt="logo" />
      <h1>ZapRecall</h1>
      <InitButton data-test="start-btn" onClick={onClickInit}>
        Iniciar Recall!
      </InitButton>
    </InitPageContainer>
  );
}
