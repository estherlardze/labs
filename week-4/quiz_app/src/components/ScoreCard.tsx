
const ScoreCard = ({ filteredQuestions, score }) => {
  return (
    <div className="score-card">
      <div className="score-card__title">
        {" "}
        <img src={filteredQuestions[0]?.icon} alt={`${filteredQuestions[0]?.title} icon`} />{" "}
        <p>{filteredQuestions[0]?.title}</p>
      </div>
      <p className="score">{score}</p>
      <p className="out-of">Out of 10</p>
    </div>
  );
};

export default ScoreCard;
