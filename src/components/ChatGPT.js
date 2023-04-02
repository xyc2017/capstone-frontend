// import React, { useState } from "react";

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSendMessage = async () => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message }),
//     };

//     const res = await fetch("/", requestOptions);
//     const data = await res.json();
//     setResponse(data);
//   };

//   return (
//     <div>
//       <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button onClick={handleSendMessage}>Send</button>
//       {response && <div>{response}</div>}
//     </div>
//   );
// };

// export default Chat;