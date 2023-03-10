import { Footer } from "../../components/Footer";
import FlashCardsList from "../../components/FlashCardsList";
import ZapRecall from "../../assets/lightning.png";
import { types, hitPercentMessages } from "../../constants";
import { useState } from "react";
import { Header, Main } from "./styled";

export default function MainPage({ recalls }) {
  const [doneRecalls, setDoneRecalls] = useState([]);

  function handleFlashClick(answerType) {
    setDoneRecalls([...doneRecalls, answerType]);
  }

  function getPercentMessage() {
    if (doneRecalls.length !== recalls.length) return;
    if (doneRecalls.includes(types.wrong)) {
      return hitPercentMessages.bad;
    }
    return hitPercentMessages.good;
  }

  const message = getPercentMessage();

  return (
    <>
      <Header recallsNumber={recalls.length}>
        <img src={ZapRecall} alt="logo" />
        <h1>ZapRecall</h1>
      </Header>
      <Main>
        <FlashCardsList onCardAnswered={handleFlashClick} recalls={recalls} />
      </Main>
      <Footer
        recallsNumber={recalls.length}
        doneRecalls={doneRecalls}
        message={message}
      />
    </>
  );
}
