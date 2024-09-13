import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FinalComponent } from './final/final.component';
import { HeaderComponent } from './header/header.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CardsComponent,
            FinalComponent,
            HeaderComponent,
            RodapeComponent,
            SobrenosComponent,
            CommonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoldenStars';
  
}
