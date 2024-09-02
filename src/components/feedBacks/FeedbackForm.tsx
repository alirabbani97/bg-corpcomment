import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

export default function FeedbackForm({
  handleAddItem,
}: {
  handleAddItem: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const charCount = MAX_CHARACTERS - text.length;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleAddItem(text);
    setText("");
  }

  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        onChange={handleChange}
        id="feedback-textarea"
        spellCheck={false}
        value={text}
      />
      <label htmlFor="feedback-textarea">
        {" "}
        Enter your feedback here, remember to <b>#hashtag</b> the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
