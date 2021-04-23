import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from './client.model';

@Injectable()
export class RoomsService{
  private roomsUrl = 'http://localhost/LABupdated/rooms';
  public currentPage = 0;

  constructor(private httpClient: HttpClient) {
  }
// http://localhost/LABupdated/rooms/all.php
  getRooms(): Observable<Room[]> {
    return this.httpClient.get<Array<Room>>(this.roomsUrl + '/all.php?pageNo=' + this.currentPage);
  }
}
