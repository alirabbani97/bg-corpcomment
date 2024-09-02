type HashtagItemProps = {
  hashtag: string;
  filterFeedbacks: (hashtag: string) => void;
};

export default function HashtagItem({
  hashtag,
  filterFeedbacks,
}: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => filterFeedbacks(hashtag)}>#{hashtag}</button>
    </li>
  );
}
