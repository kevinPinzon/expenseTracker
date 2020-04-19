import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Form register
  public name: string = "";

  constructor(private service: WebServiceService) { }

  ngOnInit() {
  }

/*
data = {
      "date1": dateToConsultUsers,
      "date2": date2ToConsultUsers,
      "text": textTosearchHelper,
      "isDateAvailable": $("#checkUsuarios").is(':checked')
    };
*/
}
