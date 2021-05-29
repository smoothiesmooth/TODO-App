import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  todoDelete(id:number) {
    this.appService.todoDelete(id)
  }

}