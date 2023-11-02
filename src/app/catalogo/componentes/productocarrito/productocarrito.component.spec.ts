import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductocarritoComponent } from './productocarrito.component';

describe('ProductocarritoComponent', () => {
  let component: ProductocarritoComponent;
  let fixture: ComponentFixture<ProductocarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductocarritoComponent]
    });
    fixture = TestBed.createComponent(ProductocarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
