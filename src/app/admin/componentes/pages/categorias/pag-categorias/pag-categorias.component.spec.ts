import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCategoriasComponent } from './pag-categorias.component';

describe('PagCategoriasComponent', () => {
  let component: PagCategoriasComponent;
  let fixture: ComponentFixture<PagCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagCategoriasComponent]
    });
    fixture = TestBed.createComponent(PagCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
