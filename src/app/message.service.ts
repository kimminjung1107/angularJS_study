import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  arrMsg: string[] = [];  // array string

  constructor() { }

  add(msg: string) {
    this.arrMsg.push(msg);
  }

  // 초기화
  clear() {
    this.arrMsg = [];
  }
}
