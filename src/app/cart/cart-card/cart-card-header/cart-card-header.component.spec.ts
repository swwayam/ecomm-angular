import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardHeaderComponent } from './cart-card-header.component';

describe('CartCardHeaderComponent', () => {
  let component: CartCardHeaderComponent;
  let fixture: ComponentFixture<CartCardHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartCardHeaderComponent]
    });
    fixture = TestBed.createComponent(CartCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
