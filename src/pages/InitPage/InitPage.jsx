import { useState } from "react";
import { InitButton, InitPageContainer, Inputs } from "./styled";
import Lightning from "../../assets/lightning_lg.png";
import recalls, { recallsOptions } from "../../recalls";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

export default function InitPage({
  onClickInit,
  setSelectedRecalls,
  selectedRecalls,
}) {
  const [exiting, setExiting] = useState(false);

  function handleRecallSelect(recall) {
    setSelectedRecalls(recalls[recall]);
  }

  function handleRecallInit() {
    if (!selectedRecalls) return;
    setExiting(true);
  }

  return (
    <InitPageContainer exiting={exiting}>
      <img
        onAnimationEnd={() => exiting && onClickInit()}
        src={Lightning}
        alt="logo"
      />
      <h1>ZapRecall</h1>

      <Inputs>
        <CustomSelect setItem={handleRecallSelect} options={recallsOptions}>
          Escolha o tema
        </CustomSelect>
        <InitButton data-test="start-btn" onClick={handleRecallInit}>
          Iniciar Recall!
        </InitButton>
      </Inputs>
    </InitPageContainer>
  );
}
