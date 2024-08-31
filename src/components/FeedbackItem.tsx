import { TriangleUpIcon } from "@radix-ui/react-icons";
import {  FeedBackItemProps } from "../lib/types";

export default function FeedbackItem({feedBackItem}: FeedBackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedBackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedBackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedBackItem.company}</p>
        <p>{feedBackItem.text}</p>
      </div>
      <p>{feedBackItem.daysAgo}d</p>
    </li>
  );
}
