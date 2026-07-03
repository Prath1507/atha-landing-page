import "./Problem.css";
import {
  FaCommentDots,
  FaHeartBroken,
  FaSyncAlt,
  FaQuestionCircle,
} from "react-icons/fa";

function Problem() {
  const problems = [
    {
      icon: <FaCommentDots />,
      title: "We keep misunderstanding each other",
    },
    {
      icon: <FaHeartBroken />,
      title: "Small arguments become big fights",
    },
    {
      icon: <FaSyncAlt />,
      title: "We keep having the same conversation",
    },
    {
      icon: <FaQuestionCircle />,
      title: "I wish they understood how I feel",
    },
  ];

  return (
    <section className="problem-section">

      <div className="container">

        <h2>
          Does this sound familiar?
        </h2>

        <p className="problem-subtitle">
          You're not alone. Most conflicts don't happen because people don't care.
          They happen because people feel unheard.
        </p>

        <div className="problem-grid">

          {problems.map((item, index) => (
            <div className="problem-card" key={index}>

              <div className="problem-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Problem;