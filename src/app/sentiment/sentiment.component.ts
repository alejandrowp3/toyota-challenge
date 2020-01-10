import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  private sentiment: any;
  @Input() id: number;

  constructor(private apiService: ApiService) { 
    this.sentiment = {
      id: undefined
    }
  }

  ngOnInit() {
  }

  getSentiment(){
    this.apiService.getSentiment(this.id).subscribe((data: any[])=>{  
      this.sentiment = data;
    },error =>{
      this.sentiment= {
        id: undefined
      }
    });
  }

}
