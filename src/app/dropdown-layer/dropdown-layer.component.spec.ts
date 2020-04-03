import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLayerComponent } from './dropdown-layer.component';

describe('DropdownLayerComponent', () => {
  let component: DropdownLayerComponent;
  let fixture: ComponentFixture<DropdownLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
