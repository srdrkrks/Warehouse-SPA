import {Box} from "./Box";
import {ResponseHeader} from "./Headers";

export interface ProductListResponse {
  responseHeader: ResponseHeader;
  productList: Product[];
}

export interface ProductCreateResponse {
  responseHeader: ResponseHeader;
  product: Product;
}

export interface ProductAssignResponse {
  responseHeader: ResponseHeader;
}

export class Product {
  id: number;
  name: string;
  desc: string;
  box: Box;
}
