import { request } from "../utils";
import { AxiosPromise } from "axios";

export function getProducts(): AxiosPromise {
  return request({
    url: "/list",
    method: "get",
  });
}

export function getProduct(itemId:string): AxiosPromise {
  return request({
    url: `/view/${itemId}`,
    method: "get"
  });
}

export function getSimilarProduct(itemId:string): AxiosPromise {
  return request({
    url: `/similar/${itemId}`,
    method: "get"
  });
}
