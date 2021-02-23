import React from "react";
import cx from "classnames";

type Props = {
  className?: string;
  link: string;
};

const Breadcrumb: React.FC<Props> = ({ link, className }) => {
  return (
    <div className={cx("text-11px", className)}>
      Home &gt; Electronics &gt; Games & Console &gt;{" "}
      <span className="underline">{link}</span>
    </div>
  );
};

export default Breadcrumb;
