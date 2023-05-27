import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopordersComponent } from './shoporders.component';

describe('ShopordersComponent', () => {
  let component: ShopordersComponent;
  let fixture: ComponentFixture<ShopordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
