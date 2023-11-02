import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContMenuComponent } from './cont-menu.component';

describe('ContMenuComponent', () => {
  let component: ContMenuComponent;
  let fixture: ComponentFixture<ContMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContMenuComponent]
    });
    fixture = TestBed.createComponent(ContMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
