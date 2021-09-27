import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPatientsComponent } from './details-patients.component';

describe('DetailsPatientsComponent', () => {
  let component: DetailsPatientsComponent;
  let fixture: ComponentFixture<DetailsPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
