import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {
  tChecked: boolean | undefined;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  
    this.appService.firstTime()

    this.getCheck()

  }

  switchTheme() {
    this.appService.switchTheme()
  }

  getCheck() {
    this.tChecked = this.appService.tChecked
  }

}