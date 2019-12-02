import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {filter, map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';


@Injectable({
    providedIn: 'root'
})
export class SqliteService {

    constructor(private socket: Socket) {}

    sendMessage(msg: string){
        this.socket.emit("message", msg);
    }

    getMessage() {
        return this.socket
            .fromEvent("message")
            .map( data => {
                console.log('Got message from SocketIO');
                console.log(data);
            });
    }
}
