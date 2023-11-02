import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcarritoComponent } from './cardcarrito.component';

describe('CardcarritoComponent', () => {
  let component: CardcarritoComponent;
  let fixture: ComponentFixture<CardcarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardcarritoComponent]
    });
    fixture = TestBed.createComponent(CardcarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
