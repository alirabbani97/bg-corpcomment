import { useFeedbackItemsStore } from "../store/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const hashtags = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      <li>
        <button onClick={() => selectCompany("All")}>#All</button>
      </li>
      {hashtags.map((hashtag) => (
        <HashtagItem
          key={hashtag}
          hashtag={hashtag}
          onFilterFeedbacks={selectCompany}
        />
      ))}
    </ul>
  );
}
