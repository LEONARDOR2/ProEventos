import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  standalone: true,       // ⚡ necessário para componentes standalone
  imports: [CommonModule, HttpClientModule], // ⚡ adiciona HttpClientModule
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'] // corrigido de styleUrl para styleUrls
})
export class Eventos {

  public eventos: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('http://localhost:5106/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

    //  this.eventos =
    //  [

    //   { tema: 'Angular', local: 'São Paulo' },
    //   { tema: '.NET', local: 'Rio de Janeiro' },
    //   { tema: 'Java', local: 'Minas Gerais' },
    //   { tema: 'Python', local: 'Santa Catarina' }

    // ]
  }
}
