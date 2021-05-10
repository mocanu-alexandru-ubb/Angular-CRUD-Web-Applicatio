import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Booking} from '../shared/booking.model';
import {MatSort} from '@angular/material/sort';
import {BookingsService} from '../shared/bookings.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  dataSource: MatTableDataSource<Booking> = new MatTableDataSource<Booking>();
  displayedColumns: string[] = ['id', 'roomId', 'date', 'delete'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private bookingService: BookingsService) { }

  updateData(): void{
    this.bookingService.getBookings()
      .subscribe(bookings => {
        this.dataSource.data = bookings;
      });
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.updateData();
  }

  redirectToDelete(bookingId: number): void {
    this.bookingService.deleteBooking(bookingId);
    this.updateData();
  }
}
