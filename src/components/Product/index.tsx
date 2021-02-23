import React from "react";
import cx from "classnames";
import Description from "./Description";
import { SelectedProductDataType } from "../../redux/models/products";
import Details from "./Details";
import Image from "./Image";

type Props = {
  className?: string;
  product: SelectedProductDataType;
};

const Product: React.FC<Props> = (props: Props) => {
  const {
    data: { attributes },
    links: { image },
  } = props.product;

  return (
    <div className={cx("single-product flex flex-col mb-6", props.className)}>
      <h1 className="text-xl mb-2 similar-width">{attributes.title}</h1>
      <div className="flex flex-col md:flex-row md:mb-5">
        <Image
          src={image}
          alt={attributes.title}
          className="-mx-4 md:-mx-0 mb-4 md:mb-0"
        />
        <Details attributes={attributes} />
      </div>
      <Description className="similar-width" content={attributes.description} />
    </div>
  );
};

export default Product;
