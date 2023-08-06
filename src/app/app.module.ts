import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { HoverDirective } from './directives/hover.directive';
import { ShowMoviesDirective } from './directives/show-movies.directive';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule, Routes } from '@angular/router'
import { ROUTES } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { YearFormatPipe } from './pipes/year-format.pipe';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { CreateOnomatopiaComponent } from './components/create-onomatopia/create-onomatopia.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    CustomDirectivesComponent,
    HoverDirective,
    ShowMoviesDirective,
    SignUpComponent,
    MenuComponent,
    SearchMovieComponent,
    YearFormatPipe,
    DeveloperComponent,
    SkillComponent,
    CreateOnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
