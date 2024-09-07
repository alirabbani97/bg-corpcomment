import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";

export default function FeedbackForm() {
  const handleAddItem = useFeedbackItemsStore((state) => state.addFeedback);

  const [text, setText] = useState("");
  const [showValid, setShowValid] = useState(false);
  const [showInValid, setShowInValid] = useState(false);

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

    if (!text.includes("#")) {
      setShowInValid(true);
      setTimeout(() => setShowInValid(false), 2000);
      return;
    } else {
      setShowValid(true);
      setTimeout(() => setShowValid(false), 2000);
    }

    handleAddItem(text);
    setText("");
  }

  return (
    <form
      className={`form ${showValid ? "form--valid" : ""} ${
        showInValid ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        onChange={handleChange}
        id="feedback-textarea"
        spellCheck={false}
        value={text}
        placeholder=""
      />
      <label htmlFor="feedback-textarea">
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
