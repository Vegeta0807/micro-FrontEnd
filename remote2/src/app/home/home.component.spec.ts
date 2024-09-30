import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DetailsComponent } from './details/details.component';

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

  it('should display the main header', () => {
    const headerElement = debugElement.query(By.css('h1')).nativeElement;
    expect(headerElement.textContent).toContain('Remote 2');
  });

  it('should have cards defined', () => {
    expect(component.cards.length).toBeGreaterThan(0);
  });

  it('should display cards initially', () => {
    const cardElements = debugElement.queryAll(By.css('.card'));
    expect(cardElements.length).toBe(component.cards.length);
  });
});
