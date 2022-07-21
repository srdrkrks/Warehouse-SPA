import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(environment.appBaseURL + '/box/list/retrieve/v1');
  }

  update() {
    return this.http.get(environment.appBaseURL + '/box/update/v1/');
  }
}
