export default function HashtagList({ hashtags }: { hashtags: string[] }) {
  return (
    <ul className="hashtags">
      {hashtags.map((hashtag) => (
        <li key={hashtag}>
          <button>#{hashtag}</button>
        </li>
      ))}
    </ul>
  );
}
