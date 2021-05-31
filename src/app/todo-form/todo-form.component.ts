import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title: string = "";

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  todoCreate() {
    this.appService.todoCreate({content:this.title, id:(this.appService.todoList.length + 1), state:false})
    this.title = ""
  }

}
