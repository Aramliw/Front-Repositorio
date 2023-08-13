import { Component } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  novoDado = {
    nome: '',
    email: '',
    senha: '',
  };
  constructor(private nomeDoServico: GeralService) {}

  adicionarDados(): void {
    if (this.novoDado.email == '') return;

    this.nomeDoServico
      .adicionarDado('usuarios/registrar', this.novoDado)
      .subscribe((resposta) => {
        console.log('Dado adicionado com sucesso:', resposta);
        // Limpar o formulário após a adição bem-sucedida
        this.novoDado = {
          nome: '',
          email: '',
          senha: '',
        };
      });
  }
}
