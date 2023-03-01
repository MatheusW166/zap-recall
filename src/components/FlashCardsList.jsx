import FlashCard from "./FlashCard";

export default function FlashCardsList({ recalls, onCardPlay }) {
  return (
    <>
      {recalls.map((recall, index) => (
        <FlashCard
          key={recall.question}
          index={index}
          recall={recall}
          onCardPlay={() => onCardPlay(index)}
        />
      ))}
    </>
  );
}
