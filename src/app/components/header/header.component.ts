import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular11-todo-app';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log("Toggle form");
  }

}
