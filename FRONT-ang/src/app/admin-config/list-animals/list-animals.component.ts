import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Animal} from '../models/animal';
import { ListanimalService } from '../services/listanimal.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})

export class ListAnimalsComponent {
  @Output() edit = new EventEmitter<boolean>();
  animals: Observable<Animal[]>;

  constructor(private listanimalService: ListanimalService,private router:Router, private route: ActivatedRoute) {
    this.animals = this.listanimalService.list();
  }

onEdit(animal:Animal) 
  {
    this.router.navigate(['/admin/animal'],{ relativeTo: this.route })
    this.edit.emit(true);
   
  }
}
