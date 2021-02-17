import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivetypesComponent } from './directivetypes.component';

describe('DirectivetypesComponent', () => {
  let component: DirectivetypesComponent;
  let fixture: ComponentFixture<DirectivetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
