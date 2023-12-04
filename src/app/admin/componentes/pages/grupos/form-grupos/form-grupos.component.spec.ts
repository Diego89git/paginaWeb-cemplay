import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGruposComponent } from './form-grupos.component';

describe('FormGruposComponent', () => {
  let component: FormGruposComponent;
  let fixture: ComponentFixture<FormGruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGruposComponent]
    });
    fixture = TestBed.createComponent(FormGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
