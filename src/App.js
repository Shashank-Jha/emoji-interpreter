import React, { useState } from "react";
import "./styles.css";

const emojis = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🤩": "Star-Struck"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojisWeKnow = Object.keys(emojis);

  function emojiInputHandler(event) {
    var msg = event.target.value;
    var meaning = emojis[msg];

    if (msg == null) meaning = "enter any emoji";
    else if (meaning === undefined) {
      meaning = "I also don't know it's meaning yet 😅";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojis[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> what do you mean 🤔</h1>

      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3>emojis</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <ul>
            <li onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {" "}
              {emoji}{" "}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
