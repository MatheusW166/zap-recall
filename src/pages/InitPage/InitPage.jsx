import { useState } from "react";
import Lightning from "../../assets/lightning_lg.png";
import { InitButton, InitPageContainer } from "./styled";

export default function InitPage({ onClickInit }) {
  const [exiting, setExiting] = useState(false);
  return (
    <InitPageContainer exiting={exiting}>
      <img
        onAnimationEnd={() => exiting && onClickInit()}
        src={Lightning}
        alt="logo"
      />
      <h1>ZapRecall</h1>
      <InitButton data-test="start-btn" onClick={() => setExiting(true)}>
        Iniciar Recall!
      </InitButton>
    </InitPageContainer>
  );
}
