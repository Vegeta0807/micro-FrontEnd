import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display details when input data is provided', () => {
    component.details = { name: 'Home', location: '123 Main St' };
    fixture.detectChanges();

    const nameElement = debugElement.query(By.css('p:nth-child(3)'));
    const locationElement = debugElement.query(By.css('p:nth-child(4)'));

    expect(nameElement).toBeTruthy();
    expect(locationElement).toBeTruthy();

    expect(nameElement.nativeElement.textContent).toContain('Name: Home');
    expect(locationElement.nativeElement.textContent).toContain(
      'Location: 123 Main St'
    );
  });

  it('should not display details section when details input is null', () => {
    component.details = null;
    fixture.detectChanges();

    const detailsContainer = debugElement.query(By.css('.details-container'));
    expect(detailsContainer).toBeFalsy();
  });

  it('should emit back event when back button is clicked', () => {
    spyOn(component.back, 'emit');

    component.details = { name: 'Home', location: '123 Main St' };
    fixture.detectChanges();

    const backButton = debugElement.query(By.css('.back-button'));
    expect(backButton).toBeTruthy(); // Ensure the button is rendered
    backButton.triggerEventHandler('click', null);

    expect(component.back.emit).toHaveBeenCalled();
  });

  it('should display the back button', () => {
    component.details = { name: 'Home', location: '123 Main St' };
    fixture.detectChanges();

    const backButton = debugElement.query(By.css('.back-button'));
    expect(backButton).toBeTruthy();
    expect(backButton.nativeElement.textContent).toContain('arrow_back');
  });

  it('should render the header "Details"', () => {
    component.details = { name: 'Home', location: '123 Main St' };
    fixture.detectChanges();

    const header = debugElement.query(By.css('h3'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.textContent).toBe('Details');
  });
});
