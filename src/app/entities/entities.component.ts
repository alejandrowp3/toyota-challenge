import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {

  private entities: any;
  @Input() id: number;

  constructor(private apiService: ApiService) { 
    this.entities = {
      id: undefined
    }
  }

  ngOnInit() {
  }

  getEntities(){
    this.apiService.getEntities(this.id).subscribe((data: any[])=>{  
      this.entities = data;
    },error =>{
      this.entities = {
        id: undefined
      }
    });
  }
}
