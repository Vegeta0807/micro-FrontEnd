import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsAwayComponent } from './details-away.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DetailsAwayComponent', () => {
  let component: DetailsAwayComponent;
  let fixture: ComponentFixture<DetailsAwayComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsAwayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsAwayComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not display details when input is null', () => {
    component.details = null;
    fixture.detectChanges();

    const detailsContainer = debugElement.query(By.css('.details-container'));
    expect(detailsContainer).toBeFalsy();
  });

  it('should display details when input is provided', () => {
    component.details = { name: 'Away', location: '123 Alternate St' };
    fixture.detectChanges();

    const detailsContainer = debugElement.query(By.css('.details-container'));
    expect(detailsContainer).toBeTruthy();

    const nameElement = debugElement.query(
      By.css('p:nth-of-type(1)')
    ).nativeElement;
    const locationElement = debugElement.query(
      By.css('p:nth-of-type(2)')
    ).nativeElement;

    expect(nameElement.textContent).toContain('Name: Away');
    expect(locationElement.textContent).toContain('Location: 123 Alternate St');
  });

  it('should emit back event when the back button is clicked', () => {
    spyOn(component.back, 'emit');

    component.details = { name: 'Away', location: '123 Alternate St' };
    fixture.detectChanges();

    const backButton = debugElement.query(By.css('.back-button'));
    backButton.triggerEventHandler('click', null);

    expect(component.back.emit).toHaveBeenCalled();
  });
});
