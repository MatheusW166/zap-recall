import FlashCard from "../FlashCard";

export default function FlashCardsList({ recalls, onCardAnswered }) {
  return (
    <>
      {recalls.map((recall, index) => (
        <FlashCard
          key={recall.question}
          index={index}
          recall={recall}
          onCardAnswered={onCardAnswered}
        />
      ))}
    </>
  );
}
