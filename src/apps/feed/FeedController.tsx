import AmericanFootballImageWrapper from "./components/AmericanFootballImageWrapper";
import ContentPresenter from "./presenters/ContentPresenter";

const FeedController = () => {
  return (
    <div className="h-full">
      <section className="h-full">
        <ContentPresenter
          header={"ATHLETES"}
          contents={[]}
          imageNode={<AmericanFootballImageWrapper />}
        />
      </section>
    </div>
  );
};

export default FeedController;
