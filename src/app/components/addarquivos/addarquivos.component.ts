import { Component } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addarquivos',
  templateUrl: './addarquivos.component.html',
  styleUrls: ['./addarquivos.component.css'],
})
export class AddarquivosComponent {
  form!: FormGroup;

  constructor(private nomeDoServico: GeralService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: '',
      arquivo: null, // Aqui é onde guardaremos o arquivo
      categoria: '',
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('arquivo')!.setValue(file);
    }
  }

  adicionarDados(): void {
    const formData = new FormData();
    formData.append('nome', this.form.value.nome);
    formData.append('arquivo', this.form.value.arquivo);
    formData.append('categoria', this.form.value.categoria);

    this.nomeDoServico.adicionarDado('arquivos/adicionar', formData).subscribe(
      (resposta) => {
        console.log('Dado adicionado com sucesso:', resposta);
        this.form.reset();
      },
      (error) => {
        console.error('Erro ao adicionar tarefa:', error);
      }
    );
  }
}
