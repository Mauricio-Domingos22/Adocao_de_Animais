import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent {

animals: any[]=[];

constructor(private http:HttpClient){
  this.animals=[
    
    {id: null},
    {name: null},
    {sex: null},
    {age: null},
    {height: null},
    {weight: null},
    {race: null},
    {type_animal: null},
    {color: null},
    {about_animal: null},
    {photograph:null}
  ]
}

listAnimal(){

this.http.get('http://127.0.0.1:3333/animals').subscribe((res)=>{})
}
}
