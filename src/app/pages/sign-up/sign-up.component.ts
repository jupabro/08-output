import { Component } from '@angular/core';
import { Signup } from 'src/app/models/signup.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  model: Signup = new Signup("", "", "", "")
  passwordRepeat: string = ""

  isPasswordMatch(): boolean {
    return this.model.password === this.passwordRepeat;
  }

  onSubmit() {
    console.log(this.model, this.passwordRepeat)
  }

}
