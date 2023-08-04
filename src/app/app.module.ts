import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { HoverDirective } from './directives/hover.directive';
import { ShowMoviesDirective } from './directives/show-movies.directive';


@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    CustomDirectivesComponent,
    HoverDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
