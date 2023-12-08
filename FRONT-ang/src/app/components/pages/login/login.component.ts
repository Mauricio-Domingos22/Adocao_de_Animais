import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user ={
    email:null,
    password:null
  }

  

 constructor(private http:HttpClient,private router:Router){}

login(){
  this.http.post('http://127.0.0.1:3333/authenticate', this.user).subscribe((res) => {
    console.log('sucesso')
    this.router.navigate(['/'])
  });
}

}
