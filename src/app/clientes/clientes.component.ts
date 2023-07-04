import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  clienteForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  adicionarCliente() {
    if (this.clienteForm.valid) {
      this.apiService.adicionarCliente(this.clienteForm.value).subscribe(
        (data: any) => {
          this.clientes.push(data);
          this.clienteForm.reset();
        },
        error => {
          console.log('Erro ao adicionar cliente:', error);
        }
      );
    }
  }
}
