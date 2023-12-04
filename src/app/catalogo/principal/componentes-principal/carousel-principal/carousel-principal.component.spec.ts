import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPrincipalComponent } from './carousel-principal.component';

describe('CarouselPrincipalComponent', () => {
  let component: CarouselPrincipalComponent;
  let fixture: ComponentFixture<CarouselPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselPrincipalComponent]
    });
    fixture = TestBed.createComponent(CarouselPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
