import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  compras: any[] = [];
  compraForm: FormGroup;
  clientes: any[] = [];
  produtos: any[] = [];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.compraForm = this.formBuilder.group({
      dataCompra: ['', Validators.required],
      cliente: ['', Validators.required],
      produto: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getClientes();
    this.getProdutos();
  }

  getClientes() {
    this.apiService.getClientes().subscribe(
      (data: any[]) => {
        this.clientes = data;
      },
      error => {
        console.log('Erro ao buscar clientes:', error);
      }
    );
  }

  getProdutos() {
    this.apiService.getProdutos().subscribe(
      (data: any[]) => {
        this.produtos = data;
      },
      error => {
        console.log('Erro ao buscar produtos:', error);
      }
    );
  }

  adicionarCompra() {

  }
}
