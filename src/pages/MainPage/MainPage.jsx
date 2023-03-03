import { Footer } from "../../components/Footer";
import FlashCardsList from "../../components/FlashCardsList";
import ZapRecall from "../../assets/lightning.png";
import recalls from "../../recalls";
import { types, hitPercentMessages } from "../../constants";
import { useState } from "react";
import { Header, Main } from "./styled";

export default function MainPage() {
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
      <Header>
        <img src={ZapRecall} alt="logo" />
        <h1>ZapRecall</h1>
      </Header>
      <Main>
        <FlashCardsList onCardAnswered={handleFlashClick} recalls={recalls} />
      </Main>
      <Footer
        total={recalls.length}
        doneRecalls={doneRecalls}
        message={message}
      />
    </>
  );
}
