import React from "react";
import cx from "classnames";

type Props = {
  className?: string;
  src: string;
  alt: string;
};

const Image: React.FC<Props> = ({ className, src, alt }: Props) => {
  return (
    <div
      className={cx(
        "inline-flex items-center justify-center flex-1 md:mr-6 border border-gray-300 p-4 similar-width",
        className
      )}
    >
      <img src={src} alt={alt} className="mb-1" />
    </div>
  );
};

export default Image;
