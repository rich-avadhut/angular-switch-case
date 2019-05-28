import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  messages = {};
  constructor(){
    this.messages = [
      {
        "type": 0,
        "label": "Case First"
      },
      {
        "type": 2,
        "title": "",
        "replies": [
          "C",
          "C++",
          "Java",
          "JavaScript",
          "PHP",
          "DOT NET",
          "Type Script",
          "Phyton"
        ]
      },
      {
        "type": 1,
        "title": "This is title",
        "subtitle": "this is text body",
        "imageUrl": "https://image.flaticon.com/icons/svg/149/149076.svg",
        "buttons": [
          {
            "text": "Click Here",
            "postback": "https://docs.dialogflow.com/"
          }
        ]
      },
      {
        "type": 3,
        "imageUrl": "https://image.flaticon.com/icons/svg/149/149076.svg"
      },
      {
        "type": 4,
        "label": "Default case...."
      }
    ];  
  }
}