import { useEffect, useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { TFeedBackItem } from "../lib/types";

function App() {
  const [feedBackList, setFeedBackList] = useState<TFeedBackItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hashtags, setHashtags] = useState<string[]>([]);

  useEffect(() => {
    const hashtagsList = feedBackList.map(
      (item: TFeedBackItem) => item.company
    );

    const filteredList = hashtagsList
      .map((item) => item.toLowerCase())
      .filter((item, index, array) => array.indexOf(item) === index)
      .map((item) => {
        const tag = item.charAt(0).toUpperCase() + item.substring(1);
        return tag;
      });

    setHashtags(filteredList);
  }, [feedBackList]);

  const handleAddItem = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedBackItem = {
      id: new Date().getTime(),
      text: text,
      daysAgo: 0,
      upvoteCount: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedBackList((prev) => [...prev, newItem]);
  };
  useEffect(() => {
    const fetchFeedBacks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setFeedBackList(data.feedbacks);

        setIsLoading(false);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("Something went wrong");
        setIsLoading(false);
      }
    };
    fetchFeedBacks();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        feedBackList={feedBackList}
        errorMessage={errorMessage}
        isLoading={isLoading}
        handleAddItem={handleAddItem}
      />
      <HashtagList hashtags={hashtags} />
    </div>
  );
}

export default App;
