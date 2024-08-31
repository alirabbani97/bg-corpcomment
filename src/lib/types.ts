export type TFeedBackItem = {
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  id: number;
  daysAgo: number;
};

export type FeedBackItemProps = {
  feedBackItem: TFeedBackItem;
};
export type FeedBackListProps = {
  feedBackList: TFeedBackItem[];
  isLoading: boolean;
  errorMessage: string;
};
