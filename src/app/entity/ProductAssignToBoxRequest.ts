import {RequestHeader} from "./Headers";

export class ProductAssignToBoxRequest {
  requestHeader: RequestHeader | {} = {};
  product_id: number;
  box_id: number;
}
