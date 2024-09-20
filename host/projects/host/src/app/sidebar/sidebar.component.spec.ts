import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a header with text "Navigation"', () => {
    const headerElement: HTMLElement =
      fixture.nativeElement.querySelector('h2');
    expect(headerElement.textContent).toContain('Navigation');
  });

  it('should have 4 navigation items', () => {
    const listItems: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('ul li');
    expect(listItems.length).toBe(4);
  });

  it('should have correct router links', () => {
    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('a');
    const expectedLinks = ['', '/mfe1', '/away', '/mfe2'];

    links.forEach((link, index) => {
      expect(link.getAttribute('routerLink')).toBe(expectedLinks[index]);
    });
  });

  it('should have correct icons and labels', () => {
    const items = [
      { icon: 'admin_panel_settings', label: 'Admin' },
      { icon: 'home', label: 'Remote 1 Home' },
      { icon: 'travel_explore', label: 'Remote 1 Away' },
      { icon: 'home_filled', label: 'Remote 2 Home' },
    ];

    const listItems: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('ul li');

    listItems.forEach((item, index) => {
      const iconElement = item.querySelector('i');
      const anchorElement = item.querySelector('a');

      // Null checks for iconElement and anchorElement
      expect(iconElement).not.toBeNull();
      expect(anchorElement).not.toBeNull();

      expect(iconElement!.textContent).toContain(items[index].icon);
      expect(anchorElement!.ariaLabel).toContain(items[index].label);
    });
  });
});
