import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagGruposComponent } from './pag-grupos.component';

describe('PagGruposComponent', () => {
  let component: PagGruposComponent;
  let fixture: ComponentFixture<PagGruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagGruposComponent]
    });
    fixture = TestBed.createComponent(PagGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
