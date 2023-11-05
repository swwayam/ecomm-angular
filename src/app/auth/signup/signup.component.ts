import { Component, inject } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AuthModel } from 'src/app/models/AuthModel.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  #authService = inject(AuthService)

  userInfo : AuthModel = {
    email: "",
    password: ""
  }

  signup(): boolean{

    this.#authService.SignUp(this.userInfo)
    return false
  }
}
