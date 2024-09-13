import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  players = [
    { nome: 'Fabio Souza', 
      apelido: 'Faban', 
      image: 'assets/faban.png',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit... ' },
    { nome: 'Cristian Andrade', apelido: 'Cedrico', image: 'assets/cedrico.png' },
    { nome: 'Fabio Souza', apelido: 'Faban', image: 'assets/faban.png' },
    { nome: 'Cristian Andrade', apelido: 'Cedrico', image: 'assets/cedrico.png' },
  ];
  modalOpen = false;
  selectedPlayer: any = null;

  openModal(player: any) {
    this.selectedPlayer = player;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
