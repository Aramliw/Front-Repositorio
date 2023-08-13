import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.css']
})
export class ArquivosComponent implements OnInit {
  dados: any[] = [];

  constructor(private nomeDoServico: GeralService) { }

  ngOnInit(): void {
    this.nomeDoServico.obterDados('arquivos/listar').subscribe((dados) => {
      this.dados = dados;
    });
  }

}
