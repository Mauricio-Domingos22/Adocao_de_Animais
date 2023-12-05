import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  animals = {
    name: null,
    sex: null,
    age: null,
    height: null,
    weight: null,
    race: null,
    type_animal: null,
    color: null,
    about_animal: null,
    photograph:null

  };
  
  inpuForm(orderForm:any){
var formData:any = new FormData();
formData.append("name",orderForm.get('name')?.value);
formData.append("sex",orderForm.get('sex')?.value);
formData.append("age",orderForm.get('age')?.value);
formData.append("height",orderForm.get('height')?.value);
formData.append("weight",orderForm.get('weight')?.value);
formData.append("type_animal",orderForm.get('type_animal')?.value);
formData.append("color",orderForm.get('color')?.value);
formData.append("about_animal",orderForm.get('about_animal')?.value);
formData.append("photograph",orderForm.get('photograph')?.value);


  }

  constructor(private http: HttpClient) {}


  SaveAnimal(): void {
    
    this.http.post('http://127.0.0.1:3333/animal',  FormData).subscribe((res) => {
      
    });
  }
}
