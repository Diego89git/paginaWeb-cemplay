import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaproductosComponent } from './vistaproductos.component';

describe('VistaproductosComponent', () => {
  let component: VistaproductosComponent;
  let fixture: ComponentFixture<VistaproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaproductosComponent]
    });
    fixture = TestBed.createComponent(VistaproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
