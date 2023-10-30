import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedServiceService } from '../../shared-service/shared-service.service';
import { Files } from 'src/app/interface/Files';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageServiceService {
  constructor(
    private sharedService: SharedServiceService,
    private http: HttpClient
  ) {}

  addImage(imageData: any): Observable<any> {
    return this.http.post<any>(
      `${this.sharedService.imageUrl}/images`,
      imageData
    );
  }

  getAllImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.sharedService.imageUrl}/images`);
  }

  deleteImage(imageId: number): Observable<any> {
    return this.http.delete<any>(
      `${this.sharedService.imageUrl}/images/${imageId}`
    );
  }

  deteleAllImages(): Observable<any> {
    return this.http.delete<any>(`${this.sharedService.imageUrl}/images`);
  }
}
