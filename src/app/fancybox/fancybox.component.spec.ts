import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FancyboxComponent } from './fancybox.component';

describe('FancyboxComponent', () => {
  let component: FancyboxComponent;
  let fixture: ComponentFixture<FancyboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyboxComponent],
    });
    fixture = TestBed.createComponent(FancyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
