import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css']
})
export class SummarizeComponent implements OnInit {

  private summarize: any;
  @Input() id: number;

  constructor(private apiService: ApiService) { 
    this.summarize = {
      id: undefined
    }
  }

  ngOnInit() {
  }

  getSummarize(){
    this.apiService.getSummarize(this.id).subscribe((data: any[])=>{  
      this.summarize = data;
    },error =>{
      this.summarize = {
        id: undefined
      }
    });
  }
}
