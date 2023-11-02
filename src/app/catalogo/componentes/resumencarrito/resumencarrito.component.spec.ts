import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumencarritoComponent } from './resumencarrito.component';

describe('ResumencarritoComponent', () => {
  let component: ResumencarritoComponent;
  let fixture: ComponentFixture<ResumencarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumencarritoComponent]
    });
    fixture = TestBed.createComponent(ResumencarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
