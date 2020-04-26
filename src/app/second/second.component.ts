import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == "true")
    {
      console.log("zalogowany");
    }
    else
    {
      console.log("niezalogowany");
    }
  }

  ngOnInit(): void {
  }

}
