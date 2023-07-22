import {Component} from '@angular/core'

@Component({
    selector:'app-manual-hello-world',
    // templateUrl:'./manual-helloworld.component.html',
    template:`<h1>Manual Hello World Component</h1>
    <p>creating a template file for the Manual Hello World component</p>`,
    styleUrls:['./manual-helloworld.component.css'],
    styles:[`p {
        background-color: bisque;
        color: blue;
    }`]
})
export class ManualHelloWorldComponent{

}