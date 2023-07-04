import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = [];
  produtoForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  adicionarProduto() {
    if (this.produtoForm.valid) {
      this.apiService.adicionarProduto(this.produtoForm.value).subscribe(
        (data: any) => {
          this.produtos.push(data);
          this.produtoForm.reset();
        },
        error => {
          console.log('Erro ao adicionar produto:', error);
        }
      );
    }
  }
}
