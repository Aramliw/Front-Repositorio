import { Component } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  dados: any[] = [];

  constructor(private nomeDoServico: GeralService) { }

  ngOnInit(): void {
    this.nomeDoServico.obterDados('arquivos/listar').subscribe((dados) => {
      this.dados = dados;
    });
  }
  
}
