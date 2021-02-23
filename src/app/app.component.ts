import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-output';
  countParent;
  countChangedHandle(count: number){
    this.countParent = count;
  }
}
