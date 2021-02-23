import React from "react";
import cx from "classnames";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "../../redux/store";
import { ProductType } from "../../redux/models/products";
import ProductThumbnail from "../../components/ProductThumbnail";

const Products: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  const loadingState = useSelector(
    (state: RootState) => state.loading.models.products
  );
  const items = useSelector((state: RootState) => state.products.items);

  React.useEffect(() => {
    // calling api if items state is empty.
    if (items.data == undefined) {
      dispatch.products.getProducts();
    }
  }, []);

  return (
    <Container className="min-h-screen md:bg-gray-100">
      <section className="container flex justify-center bg-white round py-4 md:pt-11 md:pb-2 mb-6">
        <div className={cx("min-h-80 w-900px max-w-full font-roboto")}>
          <h1 className="text-lg uppercase mb-8">Listing</h1>
          {loadingState ? (
            <div className="flex items-center justify-center h-80">
              <Loading hideLogo />
            </div>
          ) : (
            <div className="flex flex-wrap justify-around -mr-3 md:-mr-2">
              {items?.data &&
                items.data.map((product: ProductType) => (
                  <ProductThumbnail
                    key={product.id}
                    id={product.id}
                    image={product.attributes.links.image}
                    name={product.attributes.title}
                    price={product.attributes.price}
                    className="w-140px mb-3 mr-2"
                  />
                ))}
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Products;
