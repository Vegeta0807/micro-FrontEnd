import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() card: any;
  @Output() back = new EventEmitter<void>();

  goBack() {
    this.back.emit();
  }
}
