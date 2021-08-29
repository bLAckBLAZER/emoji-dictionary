import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning",
  "😃": "Grinning",
  "😄": "Grinning",
  "😁": "Beaming",
  "😆": "Grinning",
  "😅": "Grinning",
  "🤣": "Rolling",
  "😂": "Face",
  "🙂": "Slightly",
  "🙃": "Upside-Down",
  "😉": "Winking",
  "😊": "Smiling",
  "😇": "Smiling",
  "🥰": "Smiling",
  "😍": "Smiling",
  "🤩": "Star-Struck"
};

export default function App() {
  var [emojiMeaning, setEmoji] = useState("");
  const emojiList = Object.keys(emojiDictionary);

  function emojiChangeHandler(event) {
    var emoji = event.target.value;
    if (emoji in emojiDictionary) {
      emojiMeaning = emojiDictionary[emoji];
    } else {
      emojiMeaning = "Emoji not in database";
    }
    setEmoji(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    // console.log(index);
    emojiMeaning = emojiDictionary[emoji];

    setEmoji(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Know your Emoji</h1>
      <input
        className="input-text"
        onChange={() => emojiChangeHandler(event)}
      ></input>
      <div className="emoji-meaning">{emojiMeaning}</div>
      <ul className="emoji-list">
        {emojiList.map((e) => {
          return (
            <li key={e} onClick={() => emojiClickHandler(e)}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
