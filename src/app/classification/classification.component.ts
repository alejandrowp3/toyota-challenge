import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {

  private classification: any;
  @Input() id: number;

  constructor(private apiService: ApiService) {
    this.classification = {
      id: undefined
    }
   }

  ngOnInit() {
  }

  getClassification(){
    this.apiService.getClassification(this.id).subscribe((data: any[])=>{  
      this.classification = data;
    },error =>{
      this.classification = {
        id: undefined
      }
    });
  }

}
