import {RequestHeader} from "./Headers";

export class ProductCreateRequest {
  requestHeader: RequestHeader | {} = {};
  name: string;
  desc: string;
}
