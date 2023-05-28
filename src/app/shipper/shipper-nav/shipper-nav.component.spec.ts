import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperNavComponent } from './shipper-nav.component';

describe('ShipperNavComponent', () => {
  let component: ShipperNavComponent;
  let fixture: ComponentFixture<ShipperNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
