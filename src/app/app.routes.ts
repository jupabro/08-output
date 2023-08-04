import { Routes } from "@angular/router";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

export const ROUTES: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'user', component: UserProfileComponent },
    { path: 'signup', component: SignUpComponent }
]