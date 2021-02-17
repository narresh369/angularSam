import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersxComponent } from './serversx.component';

describe('ServersxComponent', () => {
  let component: ServersxComponent;
  let fixture: ComponentFixture<ServersxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
