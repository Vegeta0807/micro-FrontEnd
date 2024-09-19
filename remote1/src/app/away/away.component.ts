import { Component } from '@angular/core';

@Component({
  selector: 'app-away',
  templateUrl: './away.component.html',
  styleUrls: ['./away.component.scss']
})
export class AwayComponent {
  isDetailsVisible = false;

  detailsData = {
    name: 'Away',
    location: '123 Alternate St'
  };

  showDetails() {
    this.isDetailsVisible = true;
  }

  hideDetails() {
    this.isDetailsVisible = false;
  }
}
