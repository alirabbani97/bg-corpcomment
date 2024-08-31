import { TFeedBackItem } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

export default function Container({
  feedBackList,
  isLoading,
  errorMessage,
  handleAddItem,
}: {
  feedBackList: TFeedBackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddItem: (text: string) => void;
}) {
  return (
    <main className="container">
      <Header handleAddItem={handleAddItem} />
      <FeedbackList
        feedBackList={feedBackList}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </main>
  );
}
