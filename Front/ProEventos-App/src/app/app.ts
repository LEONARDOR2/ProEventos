
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from './eventos/eventos';
import { Palestrantes } from './palestrantes/palestrantes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Eventos, Palestrantes],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { }  // <-- define a classe

export default App;    // <-- export default opcional
