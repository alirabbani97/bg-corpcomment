import { FeedBackListProps } from "../../lib/types";
import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "../ErrorMessage ";
import Spinner from "../Spinner";

export default function FeedbackList({
  feedBackList,
  isLoading,
  errorMessage,
}: FeedBackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedBackList.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedBackItem={feedbackItem} />
      ))}
    </ol>
  );
}
