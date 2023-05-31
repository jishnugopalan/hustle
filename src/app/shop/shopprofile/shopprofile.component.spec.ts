import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopprofileComponent } from './shopprofile.component';

describe('ShopprofileComponent', () => {
  let component: ShopprofileComponent;
  let fixture: ComponentFixture<ShopprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
