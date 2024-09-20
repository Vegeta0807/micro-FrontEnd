import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component'; // Import the actual DetailsComponent
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, DetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
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
    const headerElement = debugElement.query(By.css('h1'));
    expect(headerElement).toBeTruthy();
    expect(headerElement.nativeElement.textContent).toContain('Remote 1 Home');
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
    expect(cardElement).toBeTruthy();
    cardElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isDetailsVisible).toBeTrue();

    const detailsElement = debugElement.query(By.css('app-details'));
    expect(detailsElement).toBeTruthy();
  });

  it('should pass correct details data to the app-details component', () => {
    component.showDetails();
    fixture.detectChanges();

    const detailsComponent = debugElement.query(
      By.directive(DetailsComponent)
    ).componentInstance;
    expect(detailsComponent).toBeTruthy();
    expect(detailsComponent.details).toEqual(component.detailsData);
  });

  it('should call hideDetails when back event is triggered from app-details', () => {
    spyOn(component, 'hideDetails');

    component.showDetails();
    fixture.detectChanges();

    const detailsComponent = debugElement.query(By.directive(DetailsComponent));
    expect(detailsComponent).toBeTruthy();
    detailsComponent.triggerEventHandler('back', null);

    expect(component.hideDetails).toHaveBeenCalled();
  });
});
