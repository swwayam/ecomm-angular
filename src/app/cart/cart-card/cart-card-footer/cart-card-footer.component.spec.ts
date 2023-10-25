import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardFooterComponent } from './cart-card-footer.component';

describe('CartCardFooterComponent', () => {
  let component: CartCardFooterComponent;
  let fixture: ComponentFixture<CartCardFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartCardFooterComponent]
    });
    fixture = TestBed.createComponent(CartCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
