import "./WhatHappened.css";

function WhatHappened() {
  return (
    <section className="what-happened">

      <div className="container">

        <h2>What just happened?</h2>

        <p className="sub">
          You didn’t just watch a conversation.
          You watched it get unstuck.
        </p>

        <div className="grid">

          <div className="card">
            <h3>👂 Atha listened to both sides</h3>
            <p>Without taking sides or interrupting emotion.</p>
          </div>

          <div className="card">
            <h3>🔄 It translated feelings, not just words</h3>
            <p>“You never listen” → “I feel unheard”</p>
          </div>

          <div className="card">
            <h3>🧠 It broke the conflict loop</h3>
            <p>Defending → More hurt → More defending</p>
          </div>

          <div className="card">
            <h3>💬 It gave both people a way forward</h3>
            <p>Not advice. Not judgment. Just clarity.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhatHappened;