import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Files } from '../interface/Files';
import { SharedServiceService } from '../services/shared-service/shared-service.service';

@Component({
  selector: 'app-upload-file-modal',
  templateUrl: './upload-file-modal.component.html',
  styleUrls: ['./upload-file-modal.component.scss'],
})
export class UploadFileModalComponent {
  imageUrl!: string;
  selectedFiles: Files[] = [];
  allUploadedFiels = this.sharedService.getItemLocalStorage('allImages')
    ? [...this.sharedService.getItemLocalStorage('allImages')]
    : [];

  constructor(
    public modal: NgbActiveModal,
    private sharedService: SharedServiceService
  ) {}

  uuid(): number {
    return ((1 + Math.random()) * 0x10000) | 0;
  }

  selectFile(e: Event): void {
    const selectedFielsLength = (e.target as HTMLInputElement).files
      ?.length as number;
    for (let i = 0; i < selectedFielsLength; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(
        ((e.target as HTMLInputElement).files as FileList)[i]
      );
      reader.onload = (_event) => {
        const selectedFile = {
          imageName: ((e.target as HTMLInputElement).files as FileList)[i]
            ?.name,
          imageType: ((e.target as HTMLInputElement).files as FileList)[i]?.name
            .split('.')
            .pop(),
          size: +(
            ((e.target as HTMLInputElement).files as FileList)[i]?.size / 1000
          ).toFixed(2),
          url: reader.result as string,
          id: this.uuid(),
        };
        if (((e.target as HTMLInputElement).files as FileList).length > 0) {
          this.selectedFiles.push(selectedFile);
        } else {
          return;
        }
      };
    }
  }

  deleteSelectedFiel(imageId: number): void {
    const imageIndex = this.selectedFiles.findIndex(
      (value) => value.id === imageId
    );
    this.selectedFiles.splice(imageIndex, 1);
  }

  submit(): void {
    const updatedAllImages = [...this.allUploadedFiels, ...this.selectedFiles];
    this.sharedService.setItemLocalStorage('allImages', updatedAllImages);
    this.modal.dismiss();
  }
}
