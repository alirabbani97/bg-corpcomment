import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedBackItemProps } from "../../lib/types";
import { useState } from "react";

export default function FeedbackItem({ feedBackItem }: FeedBackItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onClick={() => setIsOpen((prev) => !prev)}
      className={`feedback  ${isOpen ? " feedback--expand" : ""}`}
    >
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
