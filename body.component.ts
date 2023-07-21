import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Output() number1event = new EventEmitter<string>();
  sendnumber1(a: any) {
    this.number1event.emit(a);
  }
  @Output() getevent = new EventEmitter<string>();
  getstatus(status: any) {
    this.getevent.emit(status);
  }
}
