import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPdfComponent } from './confirmed-pdf.component';

describe('ConfirmedPdfComponent', () => {
  let component: ConfirmedPdfComponent;
  let fixture: ComponentFixture<ConfirmedPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
