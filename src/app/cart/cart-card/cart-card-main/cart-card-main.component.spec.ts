import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardMainComponent } from './cart-card-main.component';

describe('CartCardMainComponent', () => {
  let component: CartCardMainComponent;
  let fixture: ComponentFixture<CartCardMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartCardMainComponent]
    });
    fixture = TestBed.createComponent(CartCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
