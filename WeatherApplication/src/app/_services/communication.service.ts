import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public content = new Subject<string>();
  public share = this.content.asObservable();

constructor() { }

sendMessage(message: string): any{
  this.content.next(message);
}

}
