import { useEffect, useState, useRef } from "react";
import "./ChatDemo.css";
import conversation from "./conversation.js";


function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const phoneRef = useRef(null);

useEffect(() => {
  let timeoutIds = [];

  conversation.forEach((message, index) => {
    const id = setTimeout(() => {
      setVisibleMessages(prev => [...prev, message]);
    }, index * 1800); // one message every 1.8 seconds

    timeoutIds.push(id);
  });

  return () => {
    timeoutIds.forEach(clearTimeout);
  };
}, []);

useEffect(() => {
  if (phoneRef.current) {
    phoneRef.current.scrollTop = phoneRef.current.scrollHeight;
  }
}, [visibleMessages]);

  return (
    <section className="chat-demo">
      <div className="container">

        <h2>Some conversations don’t fail because of anger.</h2>

<p className="chat-subtitle">
They fail because both people feel unheard at the same time.
Atha steps in before things break.
</p>

       

        <div className="phone" ref={phoneRef}>

          <div className="phone-header">
            <div className="header-avatar">💜</div>

            <div>
              <h3>Atha AI</h3>
              <span>Helping both sides understand each other</span>
            </div>

          </div>

          {visibleMessages.map((msg, index) => {

            if (msg.sender === "typing") {
              return (
                <div className="typing" key={index}>
                  <span>Atha is typing</span>

                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`message-row ${msg.sender} fade-in`}
              >
                <div className="message">

                  <div className="sender">
                    {msg.sender === "mira" && "Mira"}
                    {msg.sender === "arav" && "Arav"}
                    {msg.sender === "atha" && "Atha"}
                  </div>

                  <div className="bubble">
                    {msg.text}
                  </div>

                </div>
              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}

export default ChatDemo;