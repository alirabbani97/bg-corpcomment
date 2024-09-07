import { TFeedBackItem } from "../../lib/types";
import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "../ErrorMessage ";
import Spinner from "../Spinner";
import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filterFeedbacks = useFeedbackItemsStore(
    (state) => state.filteredFeedBackItems()
  );
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filterFeedbacks.map((feedbackItem: TFeedBackItem) => (
        <FeedbackItem key={feedbackItem.id} feedBackItem={feedbackItem} />
      ))}
    </ol>
  );
}
