import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutcpComponent } from './aboutcp/aboutcp.component';

export const routes: Routes = [
    {path : 'home',component : AppComponent},
    {path: 'about', component:AboutcpComponent}

  ];
