import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesInstrumentsComponent } from './devices-instruments.component';

describe('DevicesInstrumentsComponent', () => {
  let component: DevicesInstrumentsComponent;
  let fixture: ComponentFixture<DevicesInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
