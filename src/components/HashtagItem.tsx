type HashtagItemProps = {
  hashtag: string;
  onFilterFeedbacks: (hashtag: string) => void;
};

export default function HashtagItem({
  hashtag,
  onFilterFeedbacks,
}: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => onFilterFeedbacks(hashtag)}>#{hashtag}</button>
    </li>
  );
}
