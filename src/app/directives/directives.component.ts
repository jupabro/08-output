import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
title = "Hello"
isAdmin: Boolean = true
toggleRole(){
  this.isAdmin = !this.isAdmin
}
}
