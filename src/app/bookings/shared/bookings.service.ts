import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Booking} from './booking.model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class BookingsService{
  private roomsUrl = 'http://localhost/LABupdated/bookings';

  constructor(private httpClient: HttpClient) {
  }

  getBookings(): Observable<Booking[]> {
    return this.httpClient.get<Array<Booking>>(this.roomsUrl + '/all.php');
  }

   saveBooking(toSave: Booking): void{
     const headers = { 'content-type': 'application/json'};
     const body = JSON.stringify(toSave);
     console.log(body);
     this.httpClient.post(this.roomsUrl + '/add.php', body).subscribe(null);
     console.log('service finished');
   }

   deleteBooking(bookingId: number): void {
     console.log({id: bookingId});
     const headers = { 'content-type': 'application/json'};
     this.httpClient.post(this.roomsUrl + '/delete.php', {id: bookingId} ).subscribe(null);
   }

   getNewId(): Observable<number>{
    return this.httpClient.get<number>(this.roomsUrl + '/getNewId.php');
   }
}
