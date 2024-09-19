import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAwayComponent } from './details-away.component';

describe('DetailsAwayComponent', () => {
  let component: DetailsAwayComponent;
  let fixture: ComponentFixture<DetailsAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAwayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
