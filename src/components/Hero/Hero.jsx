import "./Hero.css";
import heroIllustration from "../../assets/images/hero-illustration.png"

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-left">

          <h1>
            Every conflict
            <br />
            has two stories.
          </h1>

          <h2 className="hero-subtitle">
            AI for Us listens to both before helping either one.
          </h2>

          <p className="hero-description">
            Whether it's a misunderstanding, an argument, or a difficult conversation,
            AI for Us understands both perspectives before offering guidance—helping
            people communicate with empathy instead of assumptions.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Your First Conversation
            </button>

            <button className="secondary-btn">
              See How It Works
            </button>
          </div>

          <div className="hero-features">
            <div>🔒 Private by default</div>
            <div>❤️ Neutral & unbiased</div>
            <div>⚡ Takes less than 10 minutes</div>
          </div>

        </div>

        <div className="hero-right">
          <img
            src={heroIllustration}
            alt="AI for Us helping two people understand each other"
            className="hero-main-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;