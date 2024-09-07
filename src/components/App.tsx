import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import HashtagList from "./HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";

function App() {
  const fetchFeedbacks = useFeedbackItemsStore((state) => state.fetchFeedbacks);
  useEffect(() => {
    fetchFeedbacks();
  }, []);
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
