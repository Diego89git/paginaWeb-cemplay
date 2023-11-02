import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTablaComponent } from './pag-tabla.component';

describe('PagTablaComponent', () => {
  let component: PagTablaComponent;
  let fixture: ComponentFixture<PagTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagTablaComponent]
    });
    fixture = TestBed.createComponent(PagTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
