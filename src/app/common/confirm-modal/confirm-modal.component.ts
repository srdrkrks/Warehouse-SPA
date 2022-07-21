import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  title: string | null = null;
  id: number | null = null;

  constructor(public modalRef: MdbModalRef<ConfirmModalComponent>) {
  }

  remove(id): void {
    const entityId = id;
    this.modalRef.close(entityId)
  }

}
