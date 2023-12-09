import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimalsComponent } from './list-animals.component';

describe('ListAnimalsComponent', () => {
  let component: ListAnimalsComponent;
  let fixture: ComponentFixture<ListAnimalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAnimalsComponent]
    });
    fixture = TestBed.createComponent(ListAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
