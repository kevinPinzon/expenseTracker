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
  public email: string = "";
  public password: string = "";

  constructor(private service: WebServiceService) { }

  ngOnInit() {
  }
  
  signUp() {

    if (this.name == ''){
      alert('Name cannot be empty');

    }
    if (this.email == '') {
      alert('Email cannot be empty');

    }
    if (this.password == '') {
      alert('Password cannot be empty');
    }
    
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
