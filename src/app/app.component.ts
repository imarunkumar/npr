import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Demo';
  showText:boolean=true;
  tableVal=[ {
    "username":"test1",
    "id":1
  },
  {
    "username":"test2",
    "id":2
  },

  {
    "username":"test3",
    "id":3
  }]
}
