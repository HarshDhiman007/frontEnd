import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private temp:AuthServService){
  }
  temo:boolean=true;
  checkStatus(d1:string)
  {
    if(d1==null)
    {
      this.temo=false;
      
    }
  }
  callMe()
  {
    alert("Please enter valid login credentials")
  }
  loginF(){
    this.temp.login();
  }
}
