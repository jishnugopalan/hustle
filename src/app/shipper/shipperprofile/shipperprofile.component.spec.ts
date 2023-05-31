import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperprofileComponent } from './shipperprofile.component';

describe('ShipperprofileComponent', () => {
  let component: ShipperprofileComponent;
  let fixture: ComponentFixture<ShipperprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
