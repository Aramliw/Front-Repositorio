import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent {
  novoDado = {
    email: '',
    senha: '',
  };
  constructor(private nomeDoServico: GeralService, private router: Router) {}

  adicionarDados(): void {
    if (this.novoDado.email == '') return;
    
    this.nomeDoServico
      .adicionarDado('usuarios/login', this.novoDado)
      .subscribe(
        (resposta) => {
        console.log('Dado adicionado com sucesso:', resposta);
        // Limpar o formulário após a adição bem-sucedida
        this.novoDado = {
          email: '',
          senha: '',
        };
        this.router.navigate(['']);
      });
  }
}
