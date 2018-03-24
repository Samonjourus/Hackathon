import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFieldComponent } from './get-field.component';

describe('GetFieldComponent', () => {
  let component: GetFieldComponent;
  let fixture: ComponentFixture<GetFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
