import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertUploadComponent } from './cert-upload.component';

describe('CertUploadComponent', () => {
  let component: CertUploadComponent;
  let fixture: ComponentFixture<CertUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
