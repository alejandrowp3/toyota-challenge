import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SentimentComponent } from './sentiment/sentiment.component';
import { FormsModule } from '@angular/forms';
import { ClassificationComponent } from './classification/classification.component';
import { EntitiesComponent } from './entities/entities.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { SummarizeComponent } from './summarize/summarize.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SentimentComponent,
    ClassificationComponent,
    EntitiesComponent,
    ConceptsComponent,
    SummarizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
