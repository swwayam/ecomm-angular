import { Component, inject } from '@angular/core';
import { AuthModel } from 'src/app/models/AuthModel.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  #authService : AuthService = inject(AuthService)

  userInfo : AuthModel = {
    email: "",
    password: ""
  }

  signin() : boolean{
    this.#authService.SignIn(this.userInfo)
    return false
  }
}
