import { useState } from "react";
import "./CTA.css";

function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // let form submit normally to FormSubmit
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <section className="cta">
      <div className="container">

        <h2>
          Be among the first conversations Atha helps fix
        </h2>

        <p>
          We’re building a space where misunderstandings don’t escalate —
          they get resolved before they break relationships.
        </p>

        {!submitted ? (
          <form
            className="cta-box"
            action="https://formsubmit.co/schoolapp03@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >

            <input type="hidden" name="_captcha" value="false" />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <button type="submit">
              Join Waitlist
            </button>

          </form>
        ) : (
          <div className="success-message">
            You're on the list ❤️
          </div>
        )}

        {!submitted && (
          <span className="small">
            No spam. Only updates when Atha becomes available.
          </span>
        )}

      </div>
    </section>
  );
}

export default CTA;