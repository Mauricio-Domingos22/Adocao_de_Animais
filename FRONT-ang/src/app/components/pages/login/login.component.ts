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

  loginForm: FormGroup = new FormGroup({});
  user: User = { email: '', password: '' };
 

 constructor(private fb:FormBuilder, private authservice: AuthService, private router:Router){
  this.createForm()
 }

login():void{
  if(this.loginForm.invalid){
    return Object.values(this.loginForm.controls).forEach(control =>{
      control.markAsTouched()
    })
  }else{
    this.setUser
  this.authservice.login(this.user)
  this.router.navigate(['/home'])
  }
}

get emailValidate(){
  return(
this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched
  );
}

get passwordvalidate(){
  return(
this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched
  );
}

createForm():void{
  this.loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
  
}
setUser():void{
  this.user = {
    email: this.loginForm.get('email')?.value,
    password: this.loginForm.get('password')?.value
  }
}

}
