import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private selectedCard: any = null;
  private cardSubject = new BehaviorSubject<any>(null);

  constructor() {}

  setCard(card: any): void {
    this.selectedCard = card;
    this.cardSubject.next(card);
  }

  getCard(): any {
    return this.selectedCard;
  }

  clearCard(): void {
    this.selectedCard = null;
    this.cardSubject.next(null);
  }

  getCardObservable() {
    return this.cardSubject.asObservable();
  }
}
