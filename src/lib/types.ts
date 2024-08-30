export type FeedBackItem = {
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  id: number;
  daysAgo: number;
};

export type FeedBackItemProps = { feedBackItem: FeedBackItem };
