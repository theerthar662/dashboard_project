import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() isSidebarToggle = new EventEmitter()
  sideBarToggle(){
    this.isSidebarToggle.emit()
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300);
  
  }
  
}
