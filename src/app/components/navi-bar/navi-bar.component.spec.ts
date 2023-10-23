import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviBarComponent } from './navi-bar.component';

describe('NaviBarComponent', () => {
  let component: NaviBarComponent;
  let fixture: ComponentFixture<NaviBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviBarComponent]
    });
    fixture = TestBed.createComponent(NaviBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
