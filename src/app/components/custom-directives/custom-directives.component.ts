import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss']
})
export class CustomDirectivesComponent {
  showMovies = true
  toggle() {
    this.showMovies = !this.showMovies
    console.log(this.showMovies)
  }
}
