import React from "react";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import Breadcrumb from "../../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "../../redux/store";
import { useParams, RouterProps } from "react-router-dom";
import { default as SingleProduct } from "../../components/Product";
import SimilarProducts from "../../components/SimilarProduct";

const Product: React.FC<RouterProps> = (props: RouterProps) => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch<Dispatch>();

  const loadingStateProduct = useSelector((state: RootState) => {
    return state.loading.effects.products.getProduct;
  });

  const loadingStateSimilarProduct = useSelector((state: RootState) => {
    return state.loading.effects.products.getSimilarProducts;
  });

  const product = useSelector(
    (state: RootState) => state.products.selectedProduct
  );

  const similarProducts = useSelector(
    (state: RootState) => state.products.similarProducts
  );

  React.useEffect(() => {
    // Preventing call any function if product is already selected
    if (product.id == id) {
      return;
    }

    dispatch.products.findProduct(id).then((product) => {
      if (product == undefined) {
        props.history.replace("/404");
        return;
      }

      dispatch.products.getSimilarProducts(id);
    });
  }, [id]);

  return (
    <Container>
      <section className="text-gray-600 body-font flex container">
        {product.data == undefined || loadingStateProduct ? (
          <div className="flex h-56 items-center justify-center w-full">
            <Loading hideLogo />
          </div>
        ) : (
          <div className="md:max-w-1070px pb-20 md:pb-6">
            <Breadcrumb
              link={product.data.attributes.title}
              className="hidden md:block mb-2"
            />
            <SingleProduct product={product} />
            {similarProducts.data == undefined || loadingStateSimilarProduct ? (
              <Loading hideLogo />
            ) : (
              <SimilarProducts products={similarProducts.data} />
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Product;
