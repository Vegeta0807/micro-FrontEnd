import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component'; // Adjust import based on your structure
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive card input', () => {
    const mockCard = { title: 'Test Title', description: 'Test Description' };
    component.card = mockCard;
    fixture.detectChanges();

    expect(component.card).toEqual(mockCard);
  });

  it('should emit back event when goBack is called', () => {
    spyOn(component.back, 'emit');

    component.goBack();

    expect(component.back.emit).toHaveBeenCalled();
  });

  it('should display card details in the template', () => {
    const mockCard = { title: 'Test Title', description: 'Test Description' };
    component.card = mockCard;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const descriptionElement = fixture.debugElement.query(
      By.css('p')
    ).nativeElement;

    expect(titleElement.textContent).toContain(mockCard.title);
    expect(descriptionElement.textContent).toContain(mockCard.description);
  });
});
