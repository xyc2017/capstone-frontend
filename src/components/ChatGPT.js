import React, { useState } from "react";
import axios from "axios";

function Chat() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
      prompt: input,
      max_tokens: 50,
      n: 1,
      stop: ["\n"],
      temperature: 0.5,
    }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    setOutput(response.data.choices[0].text);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <p>{output}</p>
    </div>
  );
}

export default Chat;