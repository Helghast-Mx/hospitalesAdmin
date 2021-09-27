import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    console.log(this.sideBarOpen);
    
    this.sideBarOpen = !this.sideBarOpen;
  }
  onResize(event) {
    
    
    const innerWidth = event.target.innerWidth;
    // console.log(innerWidth);
 
    if (innerWidth < 674) {
       this.sideBarOpen = false
    } else {
      this.sideBarOpen = true
    }
 }

}
