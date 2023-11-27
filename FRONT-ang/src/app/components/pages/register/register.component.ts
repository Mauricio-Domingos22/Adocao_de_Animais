import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  adopter = {
    name:null,
    date_birth:null,
    household:null,
    telephone:null,
    id_gen:null,
    id_estad:null,
    description:null,
    email:null,
    password:null
  };
 

  constructor(private http: HttpClient) {}

  saveAdopter() {
    this.http.post('http://127.0.0.1:3333/register', this.adopter).subscribe((res) => {});
     
  }
}
