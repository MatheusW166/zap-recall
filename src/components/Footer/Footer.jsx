import {
  FooterContainer,
  HitPercentMessage,
  TypeIconWrapper,
  TypeIcons,
} from "./styled";
import { typeIcons } from "../../constants";

export default function Footer({ message, recallsNumber, doneRecalls }) {
  return (
    <FooterContainer data-test="footer" recallsNumber={recallsNumber}>
      {message && (
        <HitPercentMessage data-test="finish-text">
          <h2>{message.title}</h2>
          <p>{message.text}</p>
        </HitPercentMessage>
      )}
      {doneRecalls.length}/{recallsNumber} CONCLUÍDOS
      <TypeIcons doneRecalls={doneRecalls}>
        {doneRecalls.map((answerType, idx) => (
          <TypeIconWrapper answerType={answerType} key={idx}>
            {typeIcons[answerType]}
          </TypeIconWrapper>
        ))}
      </TypeIcons>
    </FooterContainer>
  );
}
