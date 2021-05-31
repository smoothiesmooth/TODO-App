import { Injectable } from '@angular/core';

export interface Todo{
  content: string,
  state: boolean,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public todoList: Todo[] = []

  private theme = String(localStorage.getItem('theme'))

  public tChecked = this.theme === 'dark'

  todoDelete(id:number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(this.todoList))
  }

  todoCreate(todo:Todo) {
    if (todo.content) {
      this.todoList.push(todo)
      localStorage.setItem('todos', JSON.stringify(this.todoList))
    } else {
      alert("Your note is empty!")
    }
  }

  switchTheme() {
    if (localStorage.getItem('theme') == 'light') {
      document.documentElement.dataset.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.dataset.theme = 'light'
      localStorage.setItem('theme', 'light')
    }
    }

  firstTime() {
    if ( !localStorage.getItem('theme') ) {
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.dataset.theme = this.theme
      this.tChecked = this.theme === 'dark'
    }
  }

  changeState() {
    localStorage.setItem('todos', JSON.stringify(this.todoList))
  }

}
