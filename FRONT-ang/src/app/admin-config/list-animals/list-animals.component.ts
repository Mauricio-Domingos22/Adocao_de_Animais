import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Animal } from '../models/animal';
import { ListanimalService } from '../services/listanimal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent {
 

  animals:Observable<Animal[]>;

 
  constructor(private listanimalService:ListanimalService ){
    
    this.animals = this.listanimalService.list();
  }


  onEdit(animal:Animal){

  }



}
