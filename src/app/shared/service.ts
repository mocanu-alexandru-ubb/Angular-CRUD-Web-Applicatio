import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  private roomId: number;
  saveRoomId(roomId): void {
    console.log('save data function called ' + roomId);
    this.roomId = roomId;
  }

  getRoomId(): number  {
    console.log('get data function called');
    return this.roomId;
  }
}
