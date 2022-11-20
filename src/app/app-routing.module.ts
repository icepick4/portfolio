import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'projects/:id',
        component: ProjectCardComponent,
        data: { showAll: false },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
