import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorCardComponent } from './error-card/error-card.component';
import { GoUpComponent } from './go-up/go-up.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LinkImageComponent } from './link-image/link-image.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectCardComponent } from './single-project-card/single-project-card.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills/skills.component';

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
    LinkImageComponent,
    SkillsComponent,
    SkillComponent,
    ErrorCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
