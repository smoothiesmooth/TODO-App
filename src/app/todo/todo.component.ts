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
    let todos = localStorage.getItem("todos")
    if (typeof todos === 'string') {
      this.appService.todoList = JSON.parse(todos)
    }
  }

  todoDelete(id:number) {
    this.appService.todoDelete(id)
  }

  changeState() {
    this.appService.changeState()
  }

}