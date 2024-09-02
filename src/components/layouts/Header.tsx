import FeedbackForm from "../feedBacks/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header({
  handleAddItem,
}: {
  handleAddItem: (text: string) => void;
}) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddItem={handleAddItem} />
    </header>
  );
}
