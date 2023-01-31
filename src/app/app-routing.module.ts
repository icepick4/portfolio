import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
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
        path: 'legal-notices',
        component: LegalNoticesComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
