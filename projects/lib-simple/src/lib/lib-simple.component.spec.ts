import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSimpleComponent } from './lib-simple.component';

describe('LibSimpleComponent', () => {
  let component: LibSimpleComponent;
  let fixture: ComponentFixture<LibSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
