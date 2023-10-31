import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileModalComponent } from './upload-file-modal/upload-file-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FancyboxComponent } from './fancybox/fancybox.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploadFileModalComponent,
    FancyboxComponent,
    DemoModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
