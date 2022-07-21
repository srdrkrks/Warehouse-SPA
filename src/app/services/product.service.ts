import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductCreateRequest} from "../entity/ProductCreateRequest";
import {ProductAssignToBoxRequest} from "../entity/ProductAssignToBoxRequest";
import {ProductDeleteRequest} from "../entity/ProductDeleteRequest";
import {ProductUpdateRequest} from "../entity/ProductUpdateRequest";
import {ProductSearchRequest} from "../entity/ProductSearchRequest";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(environment.appBaseURL + '/product/list/retrieve/v1');
  }

  update(request: ProductUpdateRequest) {
    return this.http.put(environment.appBaseURL + '/product/update/v1',
      request
    );
  }

  remove(request: ProductDeleteRequest) {
    return this.http.delete(environment.appBaseURL + '/product/remove/v1',
      {body: request}
    );
  }

  create(request: ProductCreateRequest) {
    return this.http.post(environment.appBaseURL + '/product/create/v1',
      request
    );
  }

  assignToBox(request: ProductAssignToBoxRequest) {
    return this.http.put(environment.appBaseURL + '/product/assign/v1',
      request
    );
  }

  search(request: ProductSearchRequest) {
    return this.http.post(environment.appBaseURL + '/product/search/v1',
      request
    );
  }
}
