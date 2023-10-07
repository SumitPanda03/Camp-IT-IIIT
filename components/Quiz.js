import { useState } from "react";
import Image from "next/image";
function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;

    console.log(nextQuestions);

    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(0);
    setShowScore(false);
  };

  return (
    <>
      {showScore ? (
        <div className="course__quiz-score">
          Your score {score}/{questions.length}{" "}
          {score < 5 ? (
            ""
          ) : (
            <span role="img" aria-label="confetti">
              🎉
            </span>
          )}
          <button className="course__quiz-restart" onClick={handleRestart}>
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="course__quiz-question">
            {questions[currentQuestion].question}
          </div>

          <div className="course__quiz-options">
            {questions[currentQuestion].options.map((answerOptions) => (
              <button
                key={answerOptions.answer}
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
                className="course__quiz-select"
              >
                {answerOptions.answer}
              </button>
            ))}
          </div>
          <section className="section-three">
        <Image
          src="/images/hashnode.png"
          width="170"
          height="170"
          alt="hashnode"
        />
        <div className="section__text-box">
          <p className="section-three__text">
            Connect with the IIIT Bhubaneswar{" "}
            <span style={{ color: "#2962ff", fontWeight: "700" }}>DEV</span>{" "}
            community.
          </p>
          <a
            href="https://hashnode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-three__link"
          >
            Join hashnode team
          </a>
        </div>
      </section>
        </>
      )}
    </>
  );
}

export default Quiz;