import React from "react";
import cx from "classnames";
import ProductThumbnail from "../ProductThumbnail";
import { SimilarProductType } from "../../redux/models/products";

type Props = {
  className?: string;
  products: SimilarProductType[];
};

const SimilarProducts: React.FC<Props> = ({ products, className }: Props) => {
  return (
    <div
      className={cx("flex flex-wrap justify-around -mr-3 md:-mr-2", className)}
    >
      {products.map((product: SimilarProductType) => (
        <ProductThumbnail
          key={product.id}
          id={product.id}
          image={product.attributes.image}
          name={product.attributes.title}
          price={product.attributes.price}
          className="w-123px mb-3 mr-2"
        />
      ))}
    </div>
  );
};

SimilarProducts.defaultProps = {
  className: "",
};

export default SimilarProducts;
