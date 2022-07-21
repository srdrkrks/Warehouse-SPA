import {ResponseHeader} from "./Headers";
import {Product} from "./Product";

export interface Box {
  id: number;
  name: string;
  desc: string;
  location: string;
}

export interface BoxListResponse {
  responseHeader: ResponseHeader;
  boxList: Box[];
}
