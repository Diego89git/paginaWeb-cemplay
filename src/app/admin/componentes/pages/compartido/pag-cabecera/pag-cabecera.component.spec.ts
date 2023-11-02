import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCabeceraComponent } from './pag-cabecera.component';

describe('PagCabeceraComponent', () => {
  let component: PagCabeceraComponent;
  let fixture: ComponentFixture<PagCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagCabeceraComponent]
    });
    fixture = TestBed.createComponent(PagCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
