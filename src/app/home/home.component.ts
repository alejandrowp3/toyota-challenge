import { Component, OnInit } from '@angular/core';
import { SentimentComponent } from '../sentiment/sentiment.component';
import { ConceptsComponent } from '../concepts/concepts.component';
import { ClassificationComponent } from '../classification/classification.component';
import { EntitiesComponent } from '../entities/entities.component';
import { SummarizeComponent } from '../summarize/summarize.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public id: any;

  constructor() { }

  ngOnInit() {

  }

  searchNews(sentiment: SentimentComponent, concepts: ConceptsComponent, classification: ClassificationComponent, entities: EntitiesComponent, summarize: SummarizeComponent){
    sentiment.getSentiment();
    concepts.getConcepts();
    classification.getClassification();
    entities.getEntities();
    summarize.getSummarize();
  }

}
