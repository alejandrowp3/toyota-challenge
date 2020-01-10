import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  private concepts: any;
  @Input() id: number;

  constructor(private apiService: ApiService) {
    this.concepts = {
      id: undefined
    }
   }

  ngOnInit() {
  }

  getConcepts(){
    this.apiService.getConcepts(this.id).subscribe((data: any[])=>{  
      this.concepts = data;
    },error =>{
      this.concepts = {
        id: undefined
      }
    });
  }

}
