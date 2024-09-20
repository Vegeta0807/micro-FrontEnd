import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwayComponent } from './away.component';
import { DetailsAwayComponent } from './details-away/details-away.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AwayComponent', () => {
  let component: AwayComponent;
  let fixture: ComponentFixture<AwayComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwayComponent, DetailsAwayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwayComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have isDetailsVisible initially set to false', () => {
    expect(component.isDetailsVisible).toBeFalse();
  });

  it('should display the main header', () => {
    const headerElement = debugElement.query(By.css('h1')).nativeElement;
    expect(headerElement.textContent).toContain('Remote 1 Away');
  });

  it('should show details when showDetails is called', () => {
    component.showDetails();
    expect(component.isDetailsVisible).toBeTrue();
  });

  it('should hide details when hideDetails is called', () => {
    component.showDetails();
    component.hideDetails();
    expect(component.isDetailsVisible).toBeFalse();
  });

  it('should toggle details visibility when the card is clicked', () => {
    const cardElement = debugElement.query(By.css('.card'));
    cardElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isDetailsVisible).toBeTrue();

    const detailsElement = debugElement.query(By.css('app-details-away'));
    expect(detailsElement).toBeTruthy();
  });

  it('should pass correct details data to the app-details-away component', () => {
    component.showDetails();
    fixture.detectChanges();

    const detailsComponent = debugElement.query(
      By.directive(DetailsAwayComponent)
    ).componentInstance;
    expect(detailsComponent.details).toEqual(component.detailsData);
  });

  it('should call hideDetails when back event is triggered from app-details-away', () => {
    spyOn(component, 'hideDetails');

    component.showDetails();
    fixture.detectChanges();

    const detailsComponent = debugElement.query(By.css('app-details-away'));
    detailsComponent.triggerEventHandler('back', null);

    expect(component.hideDetails).toHaveBeenCalled();
  });
});
