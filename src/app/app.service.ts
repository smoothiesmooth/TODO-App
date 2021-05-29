import { Injectable } from '@angular/core';

export interface Todo{
  name: string,
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
  }

  todoCreate(todo:any) {
    this.todoList.push(todo)
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

}
