import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: '<div ng-click="redirecTodetails()">Navegar para Rota</div>'
})
export class HomeComponent {
  constructor(private router:Router){}

  redirecTodetails(router:string):void{
   this.router.navigate(['details']);
 
  }
}
