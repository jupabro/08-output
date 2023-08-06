import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  developer: Developer = { lastName: "Devi", firstName: "John", age: 30, gender: "non-binary", bio: "sleeps a lot", skills: [{ name: "Angular", logo: "../../assets/angular.png", site: "https://angular.io/" }, { name: "React", logo: "../../assets/React-icon.svg.png", site: "https://react.dev/" }] }

}
