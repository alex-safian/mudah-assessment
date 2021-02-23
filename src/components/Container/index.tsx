import React from "react";
import cx from "classnames";
import Header from "../Header";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <div className={cx(className)}>
      <Header />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default Container;
