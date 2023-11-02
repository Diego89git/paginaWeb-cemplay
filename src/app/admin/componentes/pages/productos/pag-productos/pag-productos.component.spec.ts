import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagProductosComponent } from './pag-productos.component';

describe('PagProductosComponent', () => {
  let component: PagProductosComponent;
  let fixture: ComponentFixture<PagProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagProductosComponent]
    });
    fixture = TestBed.createComponent(PagProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
