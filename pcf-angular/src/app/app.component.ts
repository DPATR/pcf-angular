import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface GreetingResponse {
  id: number;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results: GreetingResponse;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<GreetingResponse>('http://localhost:8090/greeting').subscribe(data => {
      this.results = data;
    });
  }
}
