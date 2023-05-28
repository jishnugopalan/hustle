import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperdashComponent } from './shipperdash.component';

describe('ShipperdashComponent', () => {
  let component: ShipperdashComponent;
  let fixture: ComponentFixture<ShipperdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
