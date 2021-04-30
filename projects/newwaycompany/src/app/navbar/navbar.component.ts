import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    show = true;
    hide = true;
    message=" ";    
    receive = "";
    
    
  constructor() { }

  ngOnInit() {
  }
toggleShow(){
  this.show = !this.show;
    
  }
  defaultMessages = [
  {message1:"Hi, How may I help you?",
    message2:"Thank You for visiting our page",
    message3:"Have a great day",
    message4:"Hope your doubts got clear"}];
    
    sendMsg(val){
        this.receive = val;
}
}
