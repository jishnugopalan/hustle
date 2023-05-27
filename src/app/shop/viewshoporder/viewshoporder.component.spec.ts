import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshoporderComponent } from './viewshoporder.component';

describe('ViewshoporderComponent', () => {
  let component: ViewshoporderComponent;
  let fixture: ComponentFixture<ViewshoporderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshoporderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewshoporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
