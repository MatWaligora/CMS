import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViewEntryComponent} from "./entry-post/view-entry/view-entry.component";
import {AboutComponent} from "./about/about.component";
import {NewEntryComponent} from "./entry-post/new-entry/new-entry.component";
import {AuthGuard} from "./authentication/auth-guard.service";
import {EntryPostComponent} from "./entry-post/entry-post.component";
import {LandingComponent} from "./landing/landing.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
      path: 'home',
        component: LandingComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'post', component: EntryPostComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'new',
                component: NewEntryComponent
            },
            {
                path: ':key',
                component: ViewEntryComponent
            }
        ]
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
