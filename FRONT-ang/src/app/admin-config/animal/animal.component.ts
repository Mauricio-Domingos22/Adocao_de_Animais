import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Animal } from '../models/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  orderForm: any;

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
    photograph: null,
  };
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  inpuForm(orderForm: any) {
    var formData: any = new FormData();
    formData.append('name', this.animals.name);
    formData.append('sex', this.animals.sex);
    formData.append('age', this.animals.age);
    formData.append('height', this.animals.height);
    formData.append('weight', this.animals.weight);
    formData.append('race', this.animals.race);
    formData.append('type_animal', this.animals.type_animal);
    formData.append('color', this.animals.color);
    formData.append('about_animal', this.animals.about_animal);
    formData.append('photograph', this.animals.photograph);

    this.http
      .post('http://127.0.0.1:3333/animal', formData)
      .subscribe((res) => {
        console.log('registado com sucesso');
      });
  }

  private images: any = [];
  uploadFile(event: any) {
    this.images = [];
    const file = event.target.files[0];

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.images.push(
        this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result)
      );
      this.animals.photograph = file;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  
}
