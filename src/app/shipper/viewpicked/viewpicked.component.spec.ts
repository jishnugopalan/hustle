import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpickedComponent } from './viewpicked.component';

describe('ViewpickedComponent', () => {
  let component: ViewpickedComponent;
  let fixture: ComponentFixture<ViewpickedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpickedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
