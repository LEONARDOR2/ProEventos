
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from './eventos/eventos';
import { Palestrantes } from './palestrantes/palestrantes';
import { NavComponent } from './nav/nav.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    RouterOutlet,
    Eventos,
    Palestrantes,
    NavComponent,
    NgbCollapseModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}  // <-- define a classe

export default App;    // <-- export default opcional
