import { NgModule } from '@angular/core';
// TODO: we don't need these
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // TODO: we don't need these as well
  // imports: [
  //   CommonModule
  // ],
  // TODO but we need these exports
  exports: [ RouterModule ],
  // TODO: we don't need these as well
  //declarations: []

  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
