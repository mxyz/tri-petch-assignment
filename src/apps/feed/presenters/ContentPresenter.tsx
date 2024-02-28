import { ReactNode } from "react";
import Typography, { TYPOGRAPHY_TYPES } from "../../../components/Typography";
interface IContentColorSchema {
  bgColor?: string;
  headerColor?: string;
  contentColor?: string;
  headerLabelColor?: string;
  headerBorderColor?: string;
}

export interface IContent extends IContentColorSchema {
  header: string;
  content: string;
}

export interface IPropsContentPresenter {
  header: string;
  contents: IContent[];
  imageNode: ReactNode;
}

const ContentPresenter = (props: IPropsContentPresenter) => {
  const { header, contents, imageNode } = props;
  return (
    <div className="h-full relative">
      <section id={`header-${header}`}>
        <Typography
          className="text-systemGray !text-[50px] md:!text-[90px]"
          typography={TYPOGRAPHY_TYPES.HEADER}
        >
          {header}
        </Typography>
      </section>
      {imageNode}
      {contents.map((content, index) => (
        <section id={`content-${index}`}></section>
      ))}
    </div>
  );
};

export default ContentPresenter;
