import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: IndexComponent, children: [
    {
      path: "home",
      loadChildren: () => import('./components/home/home.module').then( m => m.HomeModule),
      canLoad: [AuthGuard]
    },
    {
      path: "about",
      loadChildren: () => import('./components/about/about.module').then( m => m.AboutModule),
      canLoad: [AuthGuard]
    },
    {
      path: "contact",
      loadChildren: () => import('./components/contact/contact.module').then( m => m.ContactModule),
      canLoad: [AuthGuard]
    },
    {
      path: "pagenotfound",
      loadChildren: () => import('./components/pagenotfound/pagenotfound.module').then( m => m.PagenotfoundModule)
    },
    { path: "**", redirectTo: "home", pathMatch: "full" },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
