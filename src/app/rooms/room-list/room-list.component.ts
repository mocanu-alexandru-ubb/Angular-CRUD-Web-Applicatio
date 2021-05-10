import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RoomsService} from '../shared/clients.service';
import {Room} from '../shared/client.model';
import {element} from 'protractor';
import {Router} from '@angular/router';
import {SharedService} from '../../shared/service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements AfterViewInit, OnInit {
  rooms: Room[];
  dataSource: MatTableDataSource<Room> = new MatTableDataSource<Room>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'category', 'type', 'price', 'hotel', 'book'];
  constructor(private roomsService: RoomsService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.roomsService.getRooms()
      .subscribe(rooms => {
        this.rooms = rooms;
        this.dataSource.data = this.rooms;
      });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateRoomsNext(): void {
    this.roomsService.currentPage++;
    this.roomsService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  updateRoomsPrev(): void {
    this.roomsService.currentPage--;
    this.roomsService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }


  redirectToBook(id: number): void {
    this.sharedService.saveRoomId(id);
    this.router.navigate(['bookings/add']);
  }
}
