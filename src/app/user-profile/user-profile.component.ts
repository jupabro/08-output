import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = new User("Doe", "John", 25, "https://randomuser.me/api/portraits/lego/2.jpg", "")

  showAge: boolean = true

  toggleAge() {
    this.showAge = !this.showAge
  }

}
