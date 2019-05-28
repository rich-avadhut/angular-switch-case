# angular-switch-case

Here is the example of Switch-Case in angular.

1. Create an object in the app.componenet.ts file.

`this.messages = [`
      `{`
        `"type": 0,`
        `"label": "Case First"`
      `},`
      `{`
        `"type": 2,`
        `"title": "",`
        `"replies": [`
          `"C",`
          `"C++",`
          `"Java",`
          `"JavaScript",`
          `"PHP",`
          `"DOT NET",`
          `"Type Script",`
          `"Phyton"`
        `]`
      `},`
      `{`
        `"type": 1,`
        `"title": "This is title",`
        `"subtitle": "this is text body",`
        `"imageUrl": "https://image.flaticon.com/icons/svg/149/149076.svg",`
        `"buttons": [`
          `{`
            `"text": "Click Here",`
            `"postback": "https://docs.dialogflow.com/"`
          `}`
        `]`
      `},`
      `{`
        `"type": 3,`
        `"imageUrl": "https://image.flaticon.com/icons/svg/149/149076.svg"`
      `},`
      `{`
        `"type": 4,`
        `"label": "Default case...."`
      `}`
    `];`

2. Write the switch case code, as per code added into the app.component.html

3. Add Bootstrap CSS into index.html

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`

4. Run the Application using

`ng serve -o`