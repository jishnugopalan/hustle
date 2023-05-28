import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorderComponent } from './setorder.component';

describe('SetorderComponent', () => {
  let component: SetorderComponent;
  let fixture: ComponentFixture<SetorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
