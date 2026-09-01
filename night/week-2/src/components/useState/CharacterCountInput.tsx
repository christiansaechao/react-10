import { useState } from "react";

/*
Requirements:
- Create a textarea input
- Show character count
- Limit to 20 characters
- If limit exceeded:
  - Show warning or change style "You're over the character limit"
  - Disable submit button
*/

export default function CharacterCounter() {
  const [charCount, setCharCount] = useState(0);
  const [message, setMessage] = useState("You are over the limit. Cannot post");

  const char_count_bool = charCount > 20;

  return (
    <div>
      <p>Current Charcter Count: {charCount}/20</p>
      <textarea
        id="textarea"
        placeholder="Enter text here"
        onChange={(e) => {
          setCharCount(e.target.value.length);
          if (!char_count_bool) {
            setMessage("");
          } else {
            setMessage("You are over the limit. Cannot post");
          }
        }}
      ></textarea>
      <button id="postButton" disabled={char_count_bool}>
        Post
      </button>
      <p>{char_count_bool && message}</p>
    </div>
  );
}
