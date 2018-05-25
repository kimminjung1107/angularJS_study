import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageService: string[] = [];  // array string

  constructor() { }

  add(msg: string) {
    this.messageService.push(msg);
  }

  // 초기화
  clear() {
    this.messageService = [];
  }
}
