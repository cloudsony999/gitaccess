import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandraniComponent } from './chandrani.component';

describe('ChandraniComponent', () => {
  let component: ChandraniComponent;
  let fixture: ComponentFixture<ChandraniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandraniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChandraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
