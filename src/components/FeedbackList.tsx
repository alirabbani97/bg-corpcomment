import { useEffect, useState } from "react";
import { FeedBackItem } from "../lib/types";
import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "./ErrorMessage ";
import Spinner from "./Spinner";


export default function FeedbackList() {
  const [feedBackList, setFeedBackList] = useState<FeedBackItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFeedBacks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setFeedBackList(data.feedbacks);
        setIsLoading(false);
        setErrorMessage("")
      } catch (error) {
        setErrorMessage("Something went wrong");
        setIsLoading(false);
      }
    };
    fetchFeedBacks();
  }, []);
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
