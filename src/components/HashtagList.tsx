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
      <li>
        <button onClick={() => filterFeedbacks("All")}>#All</button>
      </li>
      {hashtags.map((hashtag) => (
        <HashtagItem
          key={hashtag}
          hashtag={hashtag}
          filterFeedbacks={filterFeedbacks}
        />
      ))}
    </ul>
  );
}
