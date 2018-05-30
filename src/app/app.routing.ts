import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [ 
    {path:'', component: HomeComponent },
    {path:'create', component: CreateComponent },
    {path:'contact', component: ContactComponent },
    {path:'about', component: AboutComponent}
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);