import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPieComponent } from './pag-pie.component';

describe('PagPieComponent', () => {
  let component: PagPieComponent;
  let fixture: ComponentFixture<PagPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagPieComponent]
    });
    fixture = TestBed.createComponent(PagPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
