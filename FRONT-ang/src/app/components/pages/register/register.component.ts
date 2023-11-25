import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  adotante = {
    nome: null,
    data_nascimento: null,
    morada: null,
    telefone: null,
    id_gen: null,
    id_estad: null,
    descricao: null,
    id: null,
  };
  user = {
    email: null,
    password: null,
  };

  constructor(private http: HttpClient) {}

  saveAdotante() {
    this.http
      .post('http://127.0.0.1:3333/ReAdotante', this.adotante)
      .subscribe((res) => {});
      this.http.post('http://127.0.0.1:3333/register',this.user).subscribe((res)=> {})
  }
}
