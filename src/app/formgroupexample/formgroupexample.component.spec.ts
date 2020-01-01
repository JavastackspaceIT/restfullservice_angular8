import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupexampleComponent } from './formgroupexample.component';

describe('FormgroupexampleComponent', () => {
  let component: FormgroupexampleComponent;
  let fixture: ComponentFixture<FormgroupexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormgroupexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgroupexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
