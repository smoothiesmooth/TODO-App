import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  
    this.appService.firstTime()

  }

  switchTheme() {
    this.appService.switchTheme()
  }

}