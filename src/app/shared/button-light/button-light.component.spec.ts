import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLightComponent } from './button-light.component';

describe('ButtonLightComponent', () => {
  let component: ButtonLightComponent;
  let fixture: ComponentFixture<ButtonLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLightComponent]
    });
    fixture = TestBed.createComponent(ButtonLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
