import { Component, OnInit } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent{

  constructor(private service: WebServiceService) {
  }
  
}
