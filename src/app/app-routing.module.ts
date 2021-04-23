import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component';
import {BookingsComponent} from './bookings/bookings.component';
import {BookingListComponent} from './bookings/booking-list/booking-list.component';
import {BookingDeleteComponent} from './bookings/booking-delete/booking-delete.component';
import {BookingAddComponent} from './bookings/booking-add/booking-add.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: 'bookings/list', component: BookingListComponent},
  {path: 'bookings/delete', component: BookingDeleteComponent},
  {path: 'bookings/add', component: BookingAddComponent},
  {path: 'bookings', component: BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
