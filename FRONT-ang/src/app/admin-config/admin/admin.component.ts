import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  admin = {
    name: null,
    email: null,
    password: null,
  };

  constructor(private http: HttpClient) {}

  SaveAdmin() {
    this.http.post('', this.admin).subscribe((res) => {});
  }
}
