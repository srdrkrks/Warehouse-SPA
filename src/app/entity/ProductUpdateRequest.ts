import {RequestHeader} from "./Headers";

export class ProductUpdateRequest {
  requestHeader: RequestHeader | {} = {};
  id: number;
  name: string;
  desc: string;
}
