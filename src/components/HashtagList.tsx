import HashtagItem from "./HashtagItem";

export default function HashtagList({
  hashtags,
  filterFeedbacks,
}: {
  hashtags: string[];
  filterFeedbacks: (hashtag: string) => void;
}) {
  return (
    <ul className="hashtags">
      {hashtags.map((hashtag) => (
        <HashtagItem key={hashtag} hashtag={hashtag} filterFeedbacks={filterFeedbacks} />
      ))}
    </ul>
  );
}
