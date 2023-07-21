import { Component } from '@angular/core';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  num1 = '';
  result = '';
  serviceMessage = "ENTER MONEY TO WITHDRAW";
  receivenumber1(event: any) {
    this.num1 = event;
    this.result += event;
    this.finalMessage=''
  }
  finalMessage = "";
  res: number;

  receivestatus(event: any) {
    if (event == 'Enter') {
      this.serviceMessage = '';
      this.finalMessage = '';
      this.res = Number(this.result);
      if (this.res % 500 == 0 && this.res >= 500 && this.res <= 5000) {
        this.result = '';
        this.finalMessage = "Please Receive your amount";
      }
      else if (this.res > 5000) {
        this.result = '';
        this.finalMessage = "NO BALANCE";
      }
      else if (this.res <= 500) {
        this.result = '';
        this.finalMessage = "MINIMUM AMOUNT SHOULD BE 500";
      }
      else {
        this.result = '';
        this.finalMessage = "ONLY 500 NOTES ARE AVAILABLE";
      }
    }
    if (event == 'clear') {
      this.result = this.result.slice(0, -1);
    }
    if (event == 'cancel') {
      this.serviceMessage = '';
      this.finalMessage = "TRANSACTION CANCELLED";
    }
  }
}
