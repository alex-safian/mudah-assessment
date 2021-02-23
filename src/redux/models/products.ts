import { RootModel } from "./";
import { createModel } from "@rematch/core";
import {getProducts, getProduct, getSimilarProduct } from "../../api";
import { store } from "../store";
import { isEmpty } from "../../utils";

export type ProductAttributeAbstractType = {
  title: string;
  price: string;
  condition: string;
  location: string;
  seller_name: string;
  seller_type: string;
  phone: string;
  description: string;
}

type ProductLinksType = {
  self: string;
  image: string;
}

export type ProductType = {
  id: string;
  type: string;
  attributes: ProductAttributeAbstractType & {links: ProductLinksType};
}


type ProductsDataType = {
  data: ProductType[];
  meta: {count: number};
};

export type SelectedProductDataType = {
  id: string;
  data: {
    id: string;
    type: string;
    attributes: ProductAttributeAbstractType;
  };
  links: ProductLinksType
};

export type SimilarProductType = {
  id: string;
  type: string;
  attributes: {
    title: string;
    price: string;
    image: string;
    href: string;
  };
}


type SimilarProductsDataType = {
  id: string;
  data: SimilarProductType[];
  meta: {count: number};
};

type productsStateType = {
  items: ProductsDataType;
  error: string;
  selectedProduct: SelectedProductDataType;
  similarProducts: SimilarProductsDataType;
};

export const products = createModel<RootModel>()({
  state: {
    items: {},
    error: "",
    selectedProduct: {},
    similarProducts: {}
  } as productsStateType,
  reducers: {
    SET_PRODUCTS: (state: productsStateType, items: ProductsDataType) => {
      return {
        ...state,
        error: "",
        items,
      };
    },
    SET_ERROR: (state: productsStateType, error: string) => {
      return {
        ...state,
        error,
      };
    },
    SET_SELECTED_PRODUCT: (state: productsStateType, selectedProduct: SelectedProductDataType) => {
      return {
        ...state,
        error: "",
        selectedProduct
      };
    },
    FIND_PRODUCT:(state: productsStateType, productID: string) => {
      let selectedProduct = {} as SelectedProductDataType;
      const product:ProductType | undefined = state.items?.data.find(product => product.id == productID);

      if(product){
        const {links, ...attributes} = product.attributes;
        selectedProduct = {
          id: product.id,
          data: {
            id: product.id,
            type: product.type,
            attributes: attributes
            
          },
          links
        }
      }

      return {
        ...state,
        error: "",
        selectedProduct
      };
    },
    SET_SIMILAR_PRODUCTS: (state: productsStateType, similarProducts: SimilarProductsDataType) => {
      return {
        ...state,
        error: "",
        similarProducts,
      };
    },
  },
  effects: (dispatch) => {
    const { products } = dispatch;
    return {
      async getProducts({} = {}): Promise<void> {
        await getProducts().then((response) => {
          const { data }: { data: ProductsDataType } = response;
          products.SET_PRODUCTS(data);
        })
          .catch((error) => {
            products.SET_ERROR(error.message);
          });
      },
      async getProduct(productID: string): Promise<void> {

        await getProduct(productID).then((response) => {
          const { data }: { data: SelectedProductDataType } = response;
          products.SET_SELECTED_PRODUCT(data);
        })
          .catch((error) => {
            products.SET_ERROR(error.message);
          });
      },
      async getSimilarProducts(productID: string): Promise<void> {
        await getSimilarProduct(productID).then((response) => {
          const { data }: { data: SimilarProductsDataType } = response;
          products.SET_SIMILAR_PRODUCTS(data);
        })
          .catch((error) => {
            products.SET_ERROR(error.message);
          });
      },
      async findProduct(productID: string, rootState): Promise<undefined | boolean> {
        const { products: {items} } = rootState;

        if(items?.data == undefined){
          await dispatch.products.getProduct(productID); 
          const {selectedProduct} = store.getState().products;
          return isEmpty(selectedProduct) ? undefined : true;   
        }

        products.FIND_PRODUCT(productID);          
        const {selectedProduct} = store.getState().products;
        return isEmpty(selectedProduct) ? undefined : true; 
      },
    };
  },
});
