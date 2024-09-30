import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { CardService } from '../card.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let cardServiceSpy: jasmine.SpyObj<CardService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const cardServiceMock = jasmine.createSpyObj('CardService', [
      'getCard',
      'clearCard',
    ]);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: CardService, useValue: cardServiceMock },
        { provide: Router, useValue: routerMock },
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    cardServiceSpy = TestBed.inject(CardService) as jasmine.SpyObj<CardService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the DetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set card on initialization from CardService', () => {
    // Arrange: Set up mock card data
    const mockCard = { title: 'Test Card', description: 'Test Description' };
    cardServiceSpy.getCard.and.returnValue(mockCard);

    // Act: Trigger ngOnInit
    component.ngOnInit();
    fixture.detectChanges();

    // Assert: Card should be set from the service
    expect(component.card).toEqual(mockCard);
  });

  it('should navigate back and clear the card when goBack() is called', () => {
    // Act: Call goBack method
    component.goBack();

    // Assert: Expect router.navigate to be called with 'mfe2'
    expect(routerSpy.navigate).toHaveBeenCalledWith(['mfe2']);
    // Expect the card to be cleared via cardService.clearCard
    expect(cardServiceSpy.clearCard).toHaveBeenCalled();
  });

  it('should display card details correctly in the template', () => {
    // Arrange: Set up mock card data
    const mockCard = { title: 'Test Card', description: 'Test Description' };
    cardServiceSpy.getCard.and.returnValue(mockCard);

    // Act: Trigger ngOnInit and detect changes to update the DOM
    component.ngOnInit();
    fixture.detectChanges();

    // Assert: Verify that the card title and description are rendered in the DOM
    const cardTitleElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    const cardDescriptionElement = fixture.debugElement.query(
      By.css('p')
    ).nativeElement;

    expect(cardTitleElement.textContent).toContain(mockCard.title);
    expect(cardDescriptionElement.textContent).toContain(mockCard.description);
  });

  it('should not display the card when card is null', () => {
    // Arrange: Mock getCard to return null
    cardServiceSpy.getCard.and.returnValue(null);

    // Act: Trigger ngOnInit and detect changes
    component.ngOnInit();
    fixture.detectChanges();

    // Assert: Check that no card is rendered when card is null
    const cardContainer = fixture.debugElement.query(
      By.css('.details-container')
    );
    expect(cardContainer).toBeNull();
  });

  it('should call goBack() when the back button is clicked', () => {
    // Arrange: Mock the card data
    const mockCard = { title: 'Test Card', description: 'Test Description' };
    cardServiceSpy.getCard.and.returnValue(mockCard);
    fixture.detectChanges();

    // Spy on the goBack method
    spyOn(component, 'goBack');

    // Act: Simulate button click
    const backButton = fixture.debugElement.query(By.css('.back-button'));
    backButton.triggerEventHandler('click', null);

    // Assert: Check that goBack method was called on click
    expect(component.goBack).toHaveBeenCalled();
  });
});
