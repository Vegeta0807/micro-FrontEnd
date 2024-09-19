import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-away',
  templateUrl: './details-away.component.html',
  styleUrls: ['./details-away.component.scss']
})
export class DetailsAwayComponent {
  @Input() details: { name: string; location: string } | null = null;

  @Output() back = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }
}
