import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username: string = '';
  isEmpty: boolean = true;
  

  constructor() {
    console.log(this.username.length);
    console.log(this.isEmpty);
   }

  ngOnInit(): void {
  }

  onInput(){
    if(this.username.length > 0) 
      this.isEmpty = false;

  }

  onResetName(){
    this.username = ''
    this.isEmpty = true
  }

}
