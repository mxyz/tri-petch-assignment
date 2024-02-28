import classNames from "classnames";
import { ReactNode, memo } from "react";

import css from "./Typography.module.scss";

export enum TYPOGRAPHY_TYPES {
  HEADER = "header",
  SUB_HEADER = "sub-header",
  DEFAULT = "default",
}

export interface IPropsTypography {
  children: ReactNode;
  className?: string;
  textAlign?: "left" | "center" | "right";
  typography: TYPOGRAPHY_TYPES;
}

const Typography = (props: IPropsTypography) => {
  const {
    children,
    className,
    textAlign,
    typography = TYPOGRAPHY_TYPES.DEFAULT,
  } = props;

  return (
    <>
      <p
        className={classNames(
          `text-colorsBrandWarmBlack01LabelPrimary`,
          `text-${textAlign ?? "justify"}`,
          css[typography],
          className
        )}
      >
        {children}
      </p>
    </>
  );
};

export default memo(Typography);
