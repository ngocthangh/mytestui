import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { LastActionComponent } from './features/last-action/last-action.component';
import { FeaturesComponent } from './features/features.component';
import { WhatIsPopularComponent } from './features/what-is-popular/what-is-popular.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { SimilarityComponent } from './features/similarity/similarity.component';
import { CollaborativeFilteringComponent } from './features/collaborative-filtering/collaborative-filtering.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { LogoutComponent } from './logout/logout.component';
import {MainViewComponent} from './home/mainview/mainview.component';
import {SignUpComponent} from './signup/signup.component';
import { KidComponent } from './kid/kid.component';
import { ImdbService } from './imdb.service';
import { MovieItemComponent } from './features/movie-item/movie-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'kid', component: KidComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LastActionComponent,
    FeaturesComponent,
    WhatIsPopularComponent,
    UserProfileComponent,
    SimilarityComponent,
    CollaborativeFilteringComponent,
    SurveyFormComponent,
    LogoutComponent,
    MainViewComponent,
    SignUpComponent,
    KidComponent,
    MovieItemComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    Title,
    ImdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
