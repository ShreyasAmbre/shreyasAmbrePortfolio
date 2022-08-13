import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: "", component: IndexComponent, children: [
    {
      path: "home",
      loadChildren: () => import('./components/home/home.module').then( m => m.HomeModule)
    },
    {
      path: "about",
      loadChildren: () => import('./components/about/about.module').then( m => m.AboutModule)
    },
    {
      path: "contact",
      loadChildren: () => import('./components/contact/contact.module').then( m => m.ContactModule)
    },
    { path: "**", redirectTo: "home", pathMatch: "full" },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
