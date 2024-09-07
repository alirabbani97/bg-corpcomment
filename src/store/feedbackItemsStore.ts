import { create } from "zustand";
import { TFeedBackItem } from "../lib/types";

type Store = {
  feedBackList: TFeedBackItem[];
  getCompanyList: () => string[];
  filteredFeedBackItems: () => TFeedBackItem[];
  selectedCompany: string;
  errorMessage: string;
  isLoading: boolean;
  selectCompany: (text: string) => void;
  addFeedback: (text: string) => Promise<void>;
  fetchFeedbacks: () => Promise<void>;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedBackList: [],
  getCompanyList: () => {
    return get()
      .feedBackList.map((item: TFeedBackItem) => item.company)
      .map((item) => item.toLowerCase())
      .filter((item, index, array) => array.indexOf(item) === index)
      .map((item) => {
        const tag = item.charAt(0).toUpperCase() + item.substring(1);
        return tag;
      });
  },
  filteredFeedBackItems: () => {
    const state = get();

    return state.selectedCompany !== "All"
      ? state.feedBackList.filter(
          (item) =>
            item.company.toLowerCase() === state.selectedCompany.toLowerCase()
        )
      : state.feedBackList;
  },
  errorMessage: "",
  isLoading: false,
  selectedCompany: "All",

  selectCompany: (hashtag) => {
    if (hashtag === "All") {
      set(() => ({ selectedCompany: "All" }));
    }
    set(() => ({ selectedCompany: hashtag }));
  },
  addFeedback: async (text) => {
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

    set((state) => ({
      feedBackList: [...state.feedBackList, newItem],
    }));

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
      //   setErrorMessage("Something went wrong");
      set(() => ({ errorMessage: "Something went wrong" }));
    }
  },

  fetchFeedbacks: async () => {
    // setIsLoading(true);
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      set(() => ({ feedBackList: data.feedbacks }));
      set(() => ({ isLoading: false }));
      set(() => ({ errorMessage: "" }));
    } catch (error) {
      set(() => ({ errorMessage: "Something went wrong" }));

      set(() => ({ isLoading: false }));
    }
  },
}));
