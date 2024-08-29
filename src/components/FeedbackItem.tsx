import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedBackItemProps } from "../lib/types";

export default function FeedbackItem({feedBackItem}: FeedBackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedBackItem.upvotes}</span>
      </button>
      <div>
        <p>{feedBackItem.symbol}</p>
      </div>
      <div>
        <p>{feedBackItem.companyName}</p>
        <p>{feedBackItem.comment}</p>
      </div>
      <p>{feedBackItem.daysAgo}d</p>
    </li>
  );
}
