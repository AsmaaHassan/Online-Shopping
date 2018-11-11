import { Injectable } from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  // private socket$: WebSocketSubject<any>;
  // constructor() {
  //   this.socket$ = WebSocketSubject.create('ws://localhost:8999');
  //
  //   this.socket$
  //     .subscribe(
  //       (message) => console.log(message),
  //       (err) => console.error(err),
  //       () => console.warn('Completed!')
  //     );
  // }
}
