import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectCardComponent } from './single-project-card/single-project-card.component';

const routes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        data: { showAll: false },
    },
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'projects/:id',
        component: SingleProjectCardComponent,
        data: { showAll: true },
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
