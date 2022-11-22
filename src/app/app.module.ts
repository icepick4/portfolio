import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectCardComponent } from './single-project-card/single-project-card.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { GoUpComponent } from './go-up/go-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    LandingPageComponent,
    ProjectsComponent,
    SingleProjectCardComponent,
    ButtonComponent,
    HeaderComponent,
    GoUpComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
