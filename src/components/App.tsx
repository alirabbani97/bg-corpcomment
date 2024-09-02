import { useEffect, useState } from "react";
import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import HashtagList from "./HashtagList";
import { TFeedBackItem } from "../lib/types";

function App() {
  const [feedBackList, setFeedBackList] = useState<TFeedBackItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const companyList = feedBackList
    .map((item: TFeedBackItem) => item.company)
    .map((item) => item.toLowerCase())
    .filter((item, index, array) => array.indexOf(item) === index)
    .map((item) => {
      const tag = item.charAt(0).toUpperCase() + item.substring(1);
      return tag;
    });
  console.log(companyList);
  const filteredfeedBackList: TFeedBackItem[] = selectedCompany
    ? feedBackList.filter(
        (item) => item.company.toLowerCase() == selectedCompany.toLowerCase()
      )
    : feedBackList;

  const handleAddItem = async (text: string) => {
    const companyName = text
      .split(/[\s\n]+/)
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
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          body: JSON.stringify(newItem),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
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

  const filterFeedbacks = (hashtag: string) => {
    console.log(hashtag);
    setSelectedCompany(hashtag);
  };

  return (
    <div className="app">
      <Footer />
      <Container
        feedBackList={filteredfeedBackList}
        errorMessage={errorMessage}
        isLoading={isLoading}
        handleAddItem={handleAddItem}
      />
      <HashtagList hashtags={companyList} filterFeedbacks={filterFeedbacks} />
    </div>
  );
}

export default App;
