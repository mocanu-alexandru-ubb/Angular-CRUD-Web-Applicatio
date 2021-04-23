import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared/service';
import {MatNativeDateModule} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import {BookingsService} from '../shared/bookings.service';
import {Booking} from '../shared/booking.model';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  bookingIdForm: FormControl = new FormControl('');
  roomIdForm: FormControl = new FormControl('');
  dateForm: FormControl = new FormControl('');

  constructor(private sharedService: SharedService, private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.roomIdForm.setValue(this.sharedService.getRoomId());

    this.bookingService.getNewId()
      .subscribe(newId => this.bookingIdForm.setValue(newId));
    console.log('opened add page with ' + this.roomIdForm.value);
  }

  saveBooking(): void {
    const id: number = this.bookingIdForm.value;
    const roomId: number = this.roomIdForm.value;
    const date: Date = this.dateForm.value;
    console.log(id);
    console.log(roomId);
    console.log(date);
    const toSave: Booking = {id, roomId, date} as Booking;
    console.log('created booking: ' + toSave);
    this.bookingService.saveBooking(toSave);
  }
}
