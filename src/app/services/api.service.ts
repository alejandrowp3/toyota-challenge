import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  public getSentiment(id: number){  
		return this.httpClient.get(this.SERVER_URL+"/sentiment/"+id);  
  }

  public getClassification(id: number){  
		return this.httpClient.get(this.SERVER_URL+"/classification/"+id);  
  }
  
  public getEntities(id: number){  
		return this.httpClient.get(this.SERVER_URL+"/entities/"+id);  
  }  
  
  public getConcepts(id: number){  
		return this.httpClient.get(this.SERVER_URL+"/concepts/"+id);  
  }  
  
  public getSummarize(id: number){  
		return this.httpClient.get(this.SERVER_URL+"/summarize/"+id);  
  }
  
}
