import React from "react";
import cx from "classnames";
import { Flag } from "react-feather";

type Props = {
  className?: string;
  content: string;
};

const Description: React.FC<Props> = ({ className, content }: Props) => {
  return (
    <div className={cx("pb-6 border-b border-gray-100", className)}>
      <div className="flex mb-4">
        <span className="text-red uppercase border-red border-b-2 pb-1 mr-auto">
          Description
        </span>
        <span className="text-gray-400 hover:text-gray-800 flex items-center cursor-pointer">
          <Flag className="mr-2" size={18} />
          <span className="text-sm">Report Ad</span>
        </span>
      </div>
      <div className="text-xs">
        {content.split("\\n").map((item, key) => {
          return (
            <p key={key}>
              {item}
              <br />
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
