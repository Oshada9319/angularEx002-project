import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEx002-project';
  routes = [
    {linkName: 'Home', URL: 'home'},
    {linkName: 'Settings', URL: 'settings'}
  ];
}
