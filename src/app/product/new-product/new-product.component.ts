import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {ConfirmModalComponent} from "../../common/confirm-modal/confirm-modal.component";
import {Box} from "../../entity/Box";
import {ProductService} from "../../services/product.service";
import {Product, ProductAssignResponse, ProductCreateResponse} from "../../entity/Product";
import {ProductCreateRequest} from "../../entity/ProductCreateRequest";
import {ProductAssignToBoxRequest} from "../../entity/ProductAssignToBoxRequest";
import {ProductUpdateRequest} from "../../entity/ProductUpdateRequest";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  title: string | null = null;
  id: number;
  productName: string;
  productDesc: string;
  boxArr: Box[];
  box_id: number;
  selectedBox: Box;
  productCreateResponse: ProductCreateResponse;
  productAssignResponse: ProductAssignResponse;
  theProduct: Product;
  isEditMode: boolean = false;

  constructor(public modalRef: MdbModalRef<ConfirmModalComponent>, private productService: ProductService) {
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.productName = this.theProduct?.name;
      this.productDesc = this.theProduct?.desc;
      this.id = this.theProduct?.id;
      this.box_id = this.theProduct?.box?.id;
    }
  }

  assignSelectedBox() {
    let request = new ProductAssignToBoxRequest();
    request.box_id = this.selectedBox.id;
    request.product_id = this.id;

    this.productService.assignToBox(request).subscribe((data: ProductAssignResponse) => {
      this.productAssignResponse = data;
      if (this.productCreateResponse.responseHeader.success) {
        this.closeModal();
      }
    });
  }

  closeModal() {
    this.modalRef.close(true);
  }

  update(): void {
    const request = new ProductUpdateRequest();
    request.name = this.productName;
    request.desc = this.productDesc;
    request.id = this.id;
    this.productService.update(request).subscribe((data: ProductCreateResponse) => {
      this.productCreateResponse = data;
      if (this.productCreateResponse.responseHeader.success) {
        if (this.box_id !== undefined) {
          this.selectedBox = this.boxArr.find(x => x.id == this.box_id);
          this.id = !this.isEditMode ? this.productCreateResponse.product.id : this.id;
          this.assignSelectedBox();
        }
        this.closeModal();
      }
    });
  }

  save(): void {
    if (this.productName === undefined)
      return;

    if (!this.isEditMode) {
      const request = new ProductCreateRequest();
      request.name = this.productName;
      request.desc = this.productDesc;

      this.productService.create(request).subscribe((data: ProductCreateResponse) => {
        this.productCreateResponse = data;
        if (this.productCreateResponse.responseHeader.success) {
          if (this.box_id !== undefined) {
            this.selectedBox = this.boxArr.find(x => x.id == this.box_id);
            this.id = this.productCreateResponse.product.id;
            this.assignSelectedBox();
          }
          this.closeModal();
        }
      });
    } else {
      this.update();
    }


  }

}
