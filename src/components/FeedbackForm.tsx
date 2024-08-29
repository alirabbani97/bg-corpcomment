export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea id="feedback-textarea" spellCheck={false} />
      <label htmlFor="feedback-textarea">
        {" "}
        Enter your feedback here, remember to <b>#hashtag</b> the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
