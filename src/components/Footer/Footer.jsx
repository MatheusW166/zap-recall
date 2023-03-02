import {
  FooterContainer,
  HitPercentMessage,
  TypeIconWrapper,
  TypeIcons,
} from "./styled";
import { typeIcons } from "../../constants";

export default function Footer({ message, total, doneRecalls }) {
  return (
    <FooterContainer data-test="footer">
      {message && (
        <HitPercentMessage data-test="finish-text">
          <h2>{message.title}</h2>
          <p>{message.text}</p>
        </HitPercentMessage>
      )}
      {doneRecalls.length}/{total} CONCLUÍDOS
      <TypeIcons>
        {doneRecalls.map((answerType, idx) => (
          <TypeIconWrapper answerType={answerType} key={idx}>
            {typeIcons[answerType]}
          </TypeIconWrapper>
        ))}
      </TypeIcons>
    </FooterContainer>
  );
}
