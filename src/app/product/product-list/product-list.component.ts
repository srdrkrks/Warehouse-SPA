import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product, ProductListResponse} from "../../entity/Product";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ConfirmModalComponent} from "../../common/confirm-modal/confirm-modal.component";
import {NewProductComponent} from "../new-product/new-product.component";
import {BoxService} from "../../services/box.service";
import {Box, BoxListResponse} from "../../entity/Box";
import {ProductDeleteRequest} from "../../entity/ProductDeleteRequest";
import {ProductSearchRequest} from "../../entity/ProductSearchRequest";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  modalRef: MdbModalRef<ConfirmModalComponent> | null = null;

  productListResponse: ProductListResponse;
  productArr: Array<Product> = [];
  boxListResponse: BoxListResponse;
  boxArr: Array<Box> = [];
  searchText: string = '';

  constructor(private productService: ProductService, private boxService: BoxService, private modalService: MdbModalService) {
  }

  ngOnInit(): void {
    this.getProductList();
    this.getBoxList();
  }

  getBoxList() {
    this.boxService.getList().subscribe((data: BoxListResponse) => {
      this.boxListResponse = data;
      if (this.boxListResponse.responseHeader.success) {
        this.boxArr = this.boxListResponse.boxList;
      }
    });
  }

  getProductList() {
    this.productService.getList().subscribe((data: ProductListResponse) => {
      this.productListResponse = data;
      if (this.productListResponse.responseHeader.success) {
        this.productArr = this.productListResponse.productList;
      }
    });
  }


  addProduct() {
    this.modalRef = this.modalService.open(NewProductComponent, {
      data: {title: 'New Product', boxArr: this.boxArr}
    });
    this.modalRef.onClose.subscribe((isSuccess: boolean) => {
      if (isSuccess)
        this.getProductList();
    });
  }

  remove(id: number) {
    this.modalRef = this.modalService.open(ConfirmModalComponent, {
      data: {title: 'Do you want to remove this product?', id}
    });
    this.modalRef.onClose.subscribe((product_id: number) => {
      let request = new ProductDeleteRequest();
      request.id = product_id;
      this.productService.remove(request).subscribe((isSuccess: boolean) => {
        this.getProductList();
      });
    });
  }

  edit(id: number) {
    this.modalRef = this.modalService.open(NewProductComponent, {
      data: {
        title: 'Edit Product',
        isEditMode: true,
        boxArr: this.boxArr,
        theProduct: this.productArr.find(p => p.id == id)
      }
    });
    this.modalRef.onClose.subscribe((isSuccess: boolean) => {
      if (isSuccess)
        this.getProductList();
    });
  }

  search() {
    const searchTxt = this.searchText.trim();
    if (searchTxt === "") {
      this.getProductList();
    }

    const searchRequest = new ProductSearchRequest();
    searchRequest.name = searchTxt;
    this.productService.search(searchRequest).subscribe((data: ProductListResponse) => {
      this.productListResponse = data;
      if (this.productListResponse.responseHeader.success) {
        this.productArr = this.productListResponse.productList;
      }
    });
  }
}
