import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

animal={
  name:null,
  sex:null,
  age:null,
  height:null,
  weight:null,
  race:null,
  type_animal:null,
  color:null,
  about_animal:null,
  photograph:null,
}

constructor(private http:HttpClient){}

SaveAnimal(){
  this.http.post('http://127.0.0.1:3333/animal', this.animal).subscribe((res) =>{})
}

}
