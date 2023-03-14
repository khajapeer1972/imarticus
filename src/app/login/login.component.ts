import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string="";
  errorMessage:string="";

  constructor(private route:Router){

  }

  submitt(){
    if(this.userName == "Abdul"){

      this.route.navigateByUrl("/home");

    }
    else{
      this.errorMessage=this.userName + " Not valid User!";
      this.userName = "";
      this.route.navigateByUrl("/login");
      

    }
  }

}
