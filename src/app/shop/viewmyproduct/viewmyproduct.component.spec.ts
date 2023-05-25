import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyproductComponent } from './viewmyproduct.component';

describe('ViewmyproductComponent', () => {
  let component: ViewmyproductComponent;
  let fixture: ComponentFixture<ViewmyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmyproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
