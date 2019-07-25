import {Component, Input} from '@angular/core';
import {Message} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() public activeIndex: number = 0;
  firstName: string;
  lastName: string;
  address: string;

  msgs: Message[] = [];
 
  next() {
      this.activeIndex++;
  }

  ok() {
      this.activeIndex = 0;
  }

  onChange(label: string) {
      this.msgs.length = 0;
      this.msgs.push({severity: 'info', summary: label});
  }
}
