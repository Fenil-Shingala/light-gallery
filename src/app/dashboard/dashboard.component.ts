import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileModalComponent } from '../upload-file-modal/upload-file-modal.component';
import { SharedServiceService } from '../services/shared-service/shared-service.service';
import { Files } from '../interface/Files';
import { DemoModalComponent } from '../demo-modal/demo-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showMask = false;
  curentIndex = 0;
  searchValue = '';
  allImages: Files[] = this.sharedService.getItemLocalStorage('allImages')
    ? this.sharedService.getItemLocalStorage('allImages')
    : [];
  displayImages: Files[] = this.allImages;
  curentImage: Files = this.displayImages
    ? this.displayImages[0]
    : ({} as Files);

  constructor(
    private modalService: NgbModal,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {}

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.curentIndex = index;
    this.curentImage = this.displayImages[index];
  }

  closeImagePreview(showMaskValue: boolean): void {
    this.showMask = showMaskValue;
  }

  open(): void {
    const modalRef = this.modalService.open(DemoModalComponent);
    modalRef.dismissed.subscribe(() => {
      this.allImages = this.sharedService.getItemLocalStorage('allImages');
      this.displayImages = this.allImages;
      this.searchValue = '';
    });
  }

  deleteAllImages(): void {
    localStorage.removeItem('allImages');
    this.allImages = [];
    this.displayImages = [];
  }

  deleteSelectedImage(imageId: number, imageIndex: number): void {
    const findIndex = this.allImages.findIndex((image) => image.id === imageId);
    if (this.searchValue.trim() === '') {
      this.allImages.splice(imageIndex, 1);
      this.sharedService.setItemLocalStorage('allImages', this.allImages);
      this.allImages = this.sharedService.getItemLocalStorage('allImages');
      this.displayImages = this.allImages;
    } else {
      this.displayImages.splice(imageIndex, 1);
      this.allImages.splice(findIndex, 1);
      this.sharedService.setItemLocalStorage('allImages', this.allImages);
      this.allImages = this.sharedService.getItemLocalStorage('allImages');
    }
  }

  searchImage(e: Event): void {
    this.searchValue = ((e as InputEvent).target as HTMLInputElement).value;
    const searchedData = this.allImages.filter((value) =>
      value.imageName
        .toLowerCase()
        .includes(this.searchValue.toLowerCase().trim())
    );
    this.sharedService.setSessionStorage('searchImageData', searchedData);
    this.displayImages =
      this.searchValue.trim() === '' ? this.allImages : searchedData;
  }
}
