import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAnimalComponent } from './details-animal.component';

describe('DetailsAnimalComponent', () => {
  let component: DetailsAnimalComponent;
  let fixture: ComponentFixture<DetailsAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAnimalComponent]
    });
    fixture = TestBed.createComponent(DetailsAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
