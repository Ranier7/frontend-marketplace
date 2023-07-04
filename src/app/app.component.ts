import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showPopup = false;
  ganhadorBrinde!: string;
  mesSelecionado: string = '1';

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
  
  }

  verificarGanhador() {
    this.showPopup = false;
    this.apiService.obterClienteMaisCompras(this.mesSelecionado).subscribe((response) => {
      if (response.length > 0) {
        this.ganhadorBrinde = response[0];
        this.showPopup = true;
      }
    });
  }

  title = 'sistema-marketplace';
}
