import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: 
  ['./register.component.css',],
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

    if (this.name.length < 4 || this.email == '' || this.password.length < 5){
      Swal.fire(
        'Error',
        'Invalid data',
        'error'
      );
      return;
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
