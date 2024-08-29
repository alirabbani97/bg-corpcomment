import FeedbackItem from "./FeedbackItem";

const feedBackList = [
  {
    upvotes: 546,
    symbol: "B",
    companyName: "Facebook",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit a dolor ipsam culpa?",
    id: 1,
    daysAgo: 4,
  },
  {
    upvotes: 54566,
    symbol: "B",
    companyName: "Butts",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit a dolor ipsam culpa?",
    id: 2,
    daysAgo: 4,
  },
  {
    upvotes: 546,
    symbol: "F",
    companyName: "Facebook",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit a dolor ipsam culpa?",
    id: 3,
    daysAgo: 4,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedBackList.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedBackItem={feedbackItem} />
      ))}
    </ol>
  );
}
