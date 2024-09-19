import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() details: { name: string; location: string } | null = null;

  @Output() back = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }
}
