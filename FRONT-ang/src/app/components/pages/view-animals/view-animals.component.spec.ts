import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnimalsComponent } from './view-animals.component';

describe('ViewAnimalsComponent', () => {
  let component: ViewAnimalsComponent;
  let fixture: ComponentFixture<ViewAnimalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAnimalsComponent]
    });
    fixture = TestBed.createComponent(ViewAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
