import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import EventsComponent from './events/events.component'

const routes: Routes = [
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
