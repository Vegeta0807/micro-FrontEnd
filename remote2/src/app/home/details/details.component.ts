import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  card: any;

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.card = this.cardService.getCard();
  }

  goBack(): void {
    this.router.navigate(['mfe2']);
    this.cardService.clearCard();
  }
}
