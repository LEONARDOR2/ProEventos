import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';  // ✅ importa o módulo
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports:
  [
    CommonModule,
    HttpClientModule,
    NgbCollapseModule,
    FormsModule
  ],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss']
})
export class Eventos {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  larguraImagem: number = 100;
  margemImagem: number = 2;
  exibirImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }
  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
    }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {
    this.http.get('http://localhost:5106/api/eventos').subscribe(
      response => {
         this.eventos = response;
         this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );
  }
}
