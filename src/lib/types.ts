export type FeedBackItem = {
  upvotes: number;
  symbol: string;
  companyName: string;
  comment: string;
  id: number;
  daysAgo: number;
};

export type FeedBackItemProps = { feedBackItem: FeedBackItem };
