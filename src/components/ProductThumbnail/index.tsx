import React from "react";
import cx from "classnames";
import { truncate } from "../../utils";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  image: string;
  id: string;
  name: string;
  price: string;
};

const ProductThumbnail: React.FC<Props> = ({
  name,
  id,
  price,
  image,
  className,
}: Props) => {
  return (
    <Link
      to={`/products/${id}`}
      className={cx("rounded border border-gray-200", className)}
      title={name}
    >
      <img src={image} alt={name} className="mb-1" />
      <div className="px-2 pb-2.5 flex flex-col">
        <h2 className="text-xs pb-4">{truncate(name, 32)}</h2>
        <div className="text-red text-sm mt-auto">{price}</div>
      </div>
    </Link>
  );
};

ProductThumbnail.defaultProps = {
  className: "",
};

export default ProductThumbnail;
