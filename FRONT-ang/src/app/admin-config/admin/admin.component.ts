import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  administra = {
    name: null,
    email: null,
    password: null
  };

  constructor(private http: HttpClient) {}

  SaveAdmin() {
    this.http.post('http://127.0.0.1:3333/admin', this. administra).subscribe((res) => {
      console.log("Registado com sucesso")
    });
  }
}
