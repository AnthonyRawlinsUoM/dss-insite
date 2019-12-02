import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ExternalApiComponent } from './external-api/external-api.component';

import { AboutComponent } from './about/about.component';
import { MetricsComponent } from './metrics/metrics.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { name: 'Home' } },
  { path: 'callback', component: CallbackComponent },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard]
  },
  { path: 'logout', component: LogoutComponent },


    { path: 'about', component: AboutComponent },
      { path: 'metrics', component: MetricsComponent },

  { path: '**', component: PageNotFoundComponent, data: { name: 'Page Not Found' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
